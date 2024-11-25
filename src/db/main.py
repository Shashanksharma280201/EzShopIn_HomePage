import pandas as pd
import asyncio

# fetch which store to be updated 
STORE = 'A'
# New item being added to the main database and local store 
# Function to update the smaller file
def add_local(new_row):
    df = pd.read_excel('local.xlsx', engine='openpyxl')
    if df['id'].isin([new_row['id']]).any():
        raise ValueError("Could not add because id already exists!")
    df = df._append(new_row, ignore_index=True)
    df.to_excel('local.xlsx', index=False, engine='openpyxl')

# Coroutine to update the larger file in the background
async def add_main(new_row):
    df = pd.read_excel('main.xlsx', engine='openpyxl')
    if df['id'].isin([new_row['id']]).any():
        raise ValueError("Could not add because id already exists!")
    df = df._append(new_row, ignore_index=True)
    df.to_excel('main.xlsx', index=False, engine='openpyxl')

def read_local_by_id(id):
    df = pd.read_excel('local.xlsx', engine='openpyxl')
    return df.loc[df['id'] == id]

# Function to read data from the larger file based on a given ID
def read_main_by_id(id):
    df = pd.read_excel('main.xlsx', engine='openpyxl')
    return df.loc[df['id'] == id]

# Function to edit an existing row in the smaller file
def edit_local(id, new_values):
    df = pd.read_excel('local.xlsx', engine='openpyxl')
    if id not in df['id'].values:
        raise ValueError("ID not found in the local database!")
    df.loc[df['id'] == id, list(new_values.keys())] = list(new_values.values())
    df.to_excel('local.xlsx', index=False, engine='openpyxl')

# Coroutine to edit an existing row in the larger file in the background
async def edit_main(id, new_values):
    df = pd.read_excel('main.xlsx', engine='openpyxl')
    if id not in df['id'].values:
        raise ValueError("ID not found in the main database!")
    df.loc[df['id'] == id, list(new_values.keys())] = list(new_values.values())
    df.to_excel('main.xlsx', index=False, engine='openpyxl')
    
# Function to delete an existing row in the smaller file
def delete_local(id):
    df = pd.read_excel('local.xlsx', engine='openpyxl')
    if id not in df['id'].values:
        raise ValueError("ID not found in the local database!")
    df = df[df['id'] != id]
    df.to_excel('local.xlsx', index=False, engine='openpyxl')

# Coroutine to delete an existing row in the larger file in the background
async def delete_main(id):
    df = pd.read_excel('main.xlsx', engine='openpyxl')
    if id not in df['id'].values:
        raise ValueError("ID not found in the main database!")
    df = df[df['id'] != id]
    df.to_excel('main.xlsx', index=False, engine='openpyxl')


# Main coroutine to schedule the update of the larger file asynchronously
async def main():
    # Create a new row
    new_row = {'id': 35, 'price': 1199, 'quantity': 19}

     # # Create a new row that is a copy of new_row but with an additional key-value pair for the store
    new_row_with_store = new_row.copy()
    new_row_with_store['store'] = STORE
    
    # # Update the main file with the new row that includes the store information
    await add_main(new_row_with_store)

    # # Update the smaller file synchronously
    add_local(new_row)


   

    # id_to_edit = 20 # The ID of the row you want to edit
    # new_values = {'price': 1099, 'quantity': 10} # The new values for the row
    
    # # Edit the local file synchronously
    # edit_local(id_to_edit, new_values)
    
    # # Edit the main file asynchronously
    # await edit_main(id_to_edit, new_values)
    # #   Example ID to search for
    # example_id = 3

    # # Read data from the local file based on the example ID
    # local_data = read_local_by_id(example_id)
    # print("Local data for ID", example_id, ":\n", local_data)

    # # Read data from the main file based on the example ID
    # main_data = read_main_by_id(example_id)
    # print("Main data for ID", example_id, ":\n", main_data)
   # Example ID to delete
    # id_to_delete = 6 # The ID of the row you want to delete

    # Delete the local file synchronously
    # delete_local(id_to_delete)

    # Delete the main file asynchronously
    # await delete_main(id_to_delete)
    # edit_local(id_to_delete, new_values)
    # await edit_main(id_to_delete, new_values)
    # await delete_main(id_to_delete)

    
    # Run the main coroutine
if __name__ == "__main__":
    asyncio.run(main())
