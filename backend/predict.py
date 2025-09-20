import sys
import torch
import torch.nn as nn
from torchvision import transforms
from PIL import Image

# Define the model architecture exactly as you did in your notebook
# This is a crucial step to ensure the model can be loaded correctly
class TheModel(nn.Module):
    def __init__(self, num_classes=38):
        super(TheModel, self).__init__()
        # ... your model architecture here ...

    def forward(self, x):
        # ... your forward pass logic here ...
        return x

# Load your trained model and its state dictionary
model = TheModel()
model.load_state_dict(torch.load('your_model.pth', map_location='cpu'))
model.eval()

# Define transformations
transform = transforms.Compose([
    transforms.Resize(256),
    transforms.CenterCrop(224),
    transforms.ToTensor(),
    transforms.Normalize([0.485, 0.456, 0.406], [0.229, 0.224, 0.225])
])

# Define your class names (must be in the same order as when you trained the model)
class_names = ["Apple___Apple_scab", "Apple___Black_rot", ...] # Add all 38 class names

def predict_image(image_path):
    try:
        image = Image.open(image_path)
        img_tensor = transform(image).unsqueeze(0)
        
        with torch.no_grad():
            output = model(img_tensor)
            _, predicted_idx = torch.max(output, 1)
            predicted_class_name = class_names[predicted_idx.item()]
            
            # Print the result to be captured by Node.js
            print(predicted_class_name)
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    if len(sys.argv) > 1:
        image_path = sys.argv[1]
        predict_image(image_path)