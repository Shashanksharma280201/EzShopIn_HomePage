import json
from PIL import Image
from pyzbar.pyzbar import decode

def read_barcodes(image_path):
    try:
        print(f"Reading image from: {image_path}")  # Log the image path
        image = Image.open(image_path)
        barcodes = decode(image)
        barcode_info = []

        for barcode in barcodes:
            barcode_data = barcode.data.decode('utf-8')
            barcode_type = barcode.type
            barcode_info.append({
                "type": barcode_type,
                "data": barcode_data
            })

        return barcode_info
    except Exception as e:
        return {"error": str(e)}

if __name__ == "__main__":
    image_path = 'C:/Users/Shashank/Music/NextJS/public/images/uploads/barcode.png'  # Ensure this matches the path where the image is saved
    barcode_info = read_barcodes(image_path)
    print(json.dumps(barcode_info))

    image_path = ''  # Ensure this matches the path where the image is saved