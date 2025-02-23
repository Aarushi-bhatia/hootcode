import torch
from transformers import AutoModelForCausalLM, AutoTokenizer


class Owlie:
    def __init__(self, model_name: str):
        """
        Initialize Owlie
        """
        self.device = torch.device("cuda" if torch.cuda.is_available() else "cpu")
        self.messages = [
            {"role": "owlie", "content": "You are Owlie, a coding assistant to clear users of their doubts."}
        ]
        self.model = AutoModelForCausalLM.from_pretrained(model_name, torch_dtype="auto", device_map="auto").to(self.device)
        self.tokenizer = AutoTokenizer.from_pretrained(model_name)

    def add_message(self, role: str, content: str):
        """
        Add message to conversation context
        """
        self.messages.append({"role": role, "content": content})

    def infer(self, prompt: str):
        """
        Generate response
        """
        self.messages.append({"role": "user", "content": prompt})

        text = self.tokenizer.apply_chat_template(self.messages, tokenize=False, add_generation_prompt=True)
        model_inputs = self.tokenizer([text], return_tensors="pt").to(self.device)

        with torch.no_grad():
            generated_ids = self.model.generate(**model_inputs, max_new_tokens=512)
            
        generated_ids = [
            output_ids[len(input_ids) :] for input_ids, output_ids in zip(model_inputs.input_ids, generated_ids)
        ]

        response = self.tokenizer.batch_decode(generated_ids, skip_special_tokens=True)[0]
        return response
    
if __name__ == '__main__':
    owlie = Owlie("Qwen/Qwen2.5-Coder-0.5B-Instruct")
    response = owlie.infer("hello")
    print(response)