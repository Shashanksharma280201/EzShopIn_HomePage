import pandas as pd
import asyncio

# Function to update the smaller file
def update_local(new_row):
    df = pd.read_excel('local.xlsx', engine='openpyxl')
    if df['id'].isin([new_row['id']]).any():
        raise ValueError("Could not add because id already exists!")
    df = df._append(new_row, ignore_index=True)
    df.to_excel('local.xlsx', index=False, engine='openpyxl')

# Coroutine that will start another coroutine after a delay in seconds
async def delay(coro, seconds):
    # Suspend for a time limit in seconds
    await asyncio.sleep(seconds)
    # Execute the other coroutine 
    await coro

# Coroutine to update the larger file
async def update_main(new_row):
    df = pd.read_excel('main.xlsx', engine='openpyxl')
    if df['id'].isin([new_row['id']]).any():
        raise ValueError("Could not add because id already exists!")
    df = df._append(new_row, ignore_index=True)
    df.to_excel('main.xlsx', index=False, engine='openpyxl')

# Create a new row
new_row = {'id': 13, 'price': 999, 'quantity': 7}

# Update the smaller file synchronously
update_local(new_row)

# Schedule the update of the larger file asynchronously after a 5-second delay
asyncio.run(delay(update_main(new_row), 5))
