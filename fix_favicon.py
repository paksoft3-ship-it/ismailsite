from PIL import Image

def convert_to_ico():
    try:
        # Open source image
        img = Image.open("favicon.png")
        
        # Ensure RGBA
        if img.mode != 'RGBA':
            img = img.convert('RGBA')
            
        icon_sizes = [(16, 16), (32, 32), (48, 48), (64, 64)]
        
        # Save as ICO
        img.save("src/app/favicon.ico", format='ICO', sizes=icon_sizes)
        print("Successfully converted favicon.png to src/app/favicon.ico in RGBA format")
        
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    convert_to_ico()
