import { useState } from "react";
import { Badge } from "./ui/badge";
import { CardDescription, CardTitle } from "./ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./ui/collapsible";


export const UserCard = ({ items })=> {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="px-4 py-1 w-80px h-100 rounded-3xl shadow-neutral-500 shadow-md bg-white
        dark:bg-gray-900 flex flex-col justify-between items-center"
    >
      <div className='flex flex-col mt-3 w-full flex-1 text-center'>
        <span className='flex flex-col items-center mt-5 mb-5'><Badge variant={'default'} className='text-center 
        shadow-neutral-500 shadow-md block rounded-full'>
            {items.id}</Badge></span>
        <div className='mx-1.5 '><span className='block border-b'>
          <CardTitle className="inline">Full Name: </CardTitle>
          <CardDescription className="inline">{items.name}</CardDescription>
        </span>
        <span className='block border-b'>
          <CardTitle className="inline">Email: </CardTitle>
          <CardDescription className="inline">{items.email}</CardDescription>
        </span>
        <span className='block border-b'>
          <CardTitle className="inline">Company: </CardTitle>
          <CardDescription className="inline">{items.company.name}</CardDescription>
        </span>
        <span className='block border-b'>
          <CardTitle className="inline">City: </CardTitle>
          <CardDescription className="inline">{items.address.city}</CardDescription>
        </span>
    </div>
        <Collapsible open={isOpen} onOpenChange={setIsOpen} className="">
          <CollapsibleTrigger className="text-[10px] text-gray-300 hover:text-gray-700 dark:text-gray-700
           dark:hover:text-gray-300 hover:cursor-pointer hover:underline flex justify-center w-full align-text-bottom items-bottom mt-2">
              {isOpen ? "View Less" : "View More..."}
            
          </CollapsibleTrigger>
          <CollapsibleContent className='inline flex-col px-4 py-1'>
            <span className='text-[9px] text-gray-700 border-2 rounded-full shadow-2xl flex text-center
            justify-center mb-2 font-mono mx-12 lg:mx-4'>Additional Information</span>
              <span className='block border-b'>
                <CardTitle className="inline">Phone: </CardTitle>
                <CardDescription className="inline">{items.phone}</CardDescription>
              </span>
              <span className='block border-b mb-1'>
                <CardTitle className="inline">Website: </CardTitle>
                <CardDescription className="inline">{items.website}</CardDescription>
              </span>
              <span className='block border-b'>
                <CardTitle className="inline">Street: </CardTitle>
                <CardDescription className="inline">{items.address.street}</CardDescription>
              </span>
              <span className='block border-b'>
                <CardTitle className="inline">Suite: </CardTitle>
                <CardDescription className="inline">{items.address.suite}</CardDescription>
              </span>
              <span className='block border-b'>
                <CardTitle className="inline">Zipcode: </CardTitle>
                <CardDescription className="inline">{items.address.zipcode}</CardDescription>
              </span>
          </CollapsibleContent>
         
        </Collapsible>
      </div>
    </div>
  );
}