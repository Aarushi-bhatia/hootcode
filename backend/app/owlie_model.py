from transformers import AutoModelForCausalLM, AutoTokenizer


class Owlie:
    def __init__(self, model_name: str):
        """
        Initialize Owlie
        """
        self.messages = [
            {"role": "owlie", "content": "You are Owlie, a coding assistant to clear users of their doubts."}
        ]
        self.model = AutoModelForCausalLM.from_pretrained(model_name, torch_dtype="auto", device_map="auto")
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
        model_inputs = self.tokenizer([text], return_tensors="pt").to(self.model.device)

        generated_ids = self.model.generate(**model_inputs, max_new_tokens=512)
        generated_ids = [
            output_ids[len(input_ids) :] for input_ids, output_ids in zip(model_inputs.input_ids, generated_ids)
        ]

        response = self.tokenizer.batch_decode(generated_ids, skip_special_tokens=True)[0]
        return response