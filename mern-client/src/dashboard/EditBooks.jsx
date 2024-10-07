import React, { useState } from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import { Button, Checkbox, Label, Select, Textarea, TextInput } from "flowbite-react";


const EditBooks = () => {
  const {id} = useParams();
  const {bookTitle, authorName, imageURL, category, bookDescription, bookPDFURL} = useLoaderData();

  const bookCategories = [
        "Fiction","Nonficton","Mystery","Romance","Horror","Programming","Science Fiction",
    "Historical Fiction","Humor","Fantasy","Bibliography","Autobiography","Business","Self-help",
    "Children Books","Travel", "Art","Memoir" ]
    const [selectedBookCategory, setSelectedBookCategory] = useState(bookCategories[0]);
    const handleChangeSelectedValue = (event) =>{
         console.log(event.target.value);
         setSelectedBookCategory(event.target.value);
    }
    //book submit
    const handleUpdate = (event) =>{
        event.preventDefault();
        const form = event.target;

        const bookTitle = form.bookTitle.value;
        const authorName = form.authorName.value;
        const imageURL = form.imageURL.value;
        const category = form.categoryName.value;
        const bookDescription = form.bookDescription.value;
        const bookPDFURL = form.bookPDFURL.value;

        const updatebookObj = {
            bookTitle, authorName, imageURL, category, bookDescription, bookPDFURL 
        }
        //console.log(bookObj)
        //update
        fetch(`http://localhost:5000/book/${id}`,{
          method:"PATCH",
          headers:{
            "Content-Type": "application/json"
          },
          body: JSON.stringify(updatebookObj)
        }).then(res => res.json()).then(data => {
          //console.log(data)
          alert("Book Updated Successfully!!");
          
      })
    }


  return (
    <div className='px-4 my-12'>
        <h2 className='mb-8 text-3xl font-bold'>Update A Book</h2>
        <form onSubmit={handleUpdate} className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
        <div class="flex gap-8">
        <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="bookTitle" value="Book Title" />
        </div>
        <TextInput id="bookTitle" name="bookTitle" type="text" defaultValue={bookTitle} placeholder="Book name" required />
      </div>
      <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="authorName" value="Author Name" />
        </div>
        <TextInput id="authorName" type="text" defaultValue={authorName} name="authorName" placeholder="Author name" required />
      </div>

        </div>
        <div class="flex gap-8">
        <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label htmlFor="imageURL" value="Book Image URL" />
        </div>
        <TextInput id="imageURL" name="imageURL" type="text" defaultValue={imageURL} placeholder="Book Image URL" required />
      </div>

        <div className='lg:w-1/2'>
        <div className='mb-2 block'>
        <Label htmlFor="inputState" value="Book Category" />
       
        </div>
        <Select id='inputState' name='categoryName' defaultValue={category} className='w-full rounded' value={selectedBookCategory}
        onChange={handleChangeSelectedValue}>
            {
                bookCategories.map((option) => <option key={option} value={option}>{option}</option>)
            }

        </Select>
        </div>
        </div>
        <div>
        <div className="mb-2 block">
          <Label htmlFor="bookDescription" value="Book Description" />
        </div>
        <Textarea id="bookDescription" type="text" defaultValue={bookDescription} placeholder="Write Your Book Description....." required rows={6} className='w-full'/>
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="bookPDFURL" value="Book PDF URL" />
        </div>
        <TextInput id="bookPDFURL" name="bookPDFURL" type="text" defaultValue={bookPDFURL} placeholder="Book PDF URL" required />
      </div>
        
      <Button type="submit" className='mt-5'>
        Update Book
      </Button>
    </form>
    </div>
    
  )
}

export default EditBooks