from flask import Flask, render_template, request
import base64

app = Flask(__name__)

# ===== FUNCTIONS =====

def caesar_cipher(text, shift):
    result = ""
    for char in text:
        if char.isupper():
            result += chr((ord(char) + shift - 65) % 26 + 65)
        elif char.islower():
            result += chr((ord(char) + shift - 97) % 26 + 97)
        else:
            result += char
    return result

def atbash_cipher(text):
    result = ""
    for char in text:
        if char.isupper():
            result += chr(90 - (ord(char) - 65))
        elif char.islower():
            result += chr(122 - (ord(char) - 97))
        else:
            result += char
    return result

def base64_encode(text):
    return base64.b64encode(text.encode()).decode()

def text_to_binary(text):
    return ' '.join(format(ord(c), '08b') for c in text)

def reverse_text(text):
    return text[::-1]

# ===== ROUTE =====

@app.route("/", methods=["GET", "POST"])
def index():
    result = ""
    if request.method == "POST":
        text = request.form["text"]
        option = request.form["option"]

        if option == "caesar":
            shift = int(request.form["shift"])
            result = caesar_cipher(text, shift)
        elif option == "atbash":
            result = atbash_cipher(text)
        elif option == "base64":
            result = base64_encode(text)
        elif option == "binary":
            result = text_to_binary(text)
        elif option == "reverse":
            result = reverse_text(text)

    return render_template("index.html", result=result)

if __name__ == "__main__":
    app.run(debug=True)