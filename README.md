# cedricm_dropdown

This lib is a react component library published on npm, this README will explain you how to install it and make it work.

<!-- GETTING STARTED -->
## Getting Started

To get this lib up and running follow these simple example steps.

### Installation

You can use npm or yarn to install this lib, I'll give you both examples.

1. Install the lib
   ```sh
   npm install cedricm_dropdown
   ```
   with yarn it would be
   ```sh
   yarn add cedricm_dropdown
   ```

Your should have a cedricm_dropdown folder in your node_modules.

### How it works

Now that you have the lib in your porject you can use
   ```sh
   import { Dropdown } from "cedricm_dropdown";
   ```
in your jsx file to import the component.

Call the dropdown like this
   ```sh
   <Dropdown {...argument}/>
   ```
I will now show you how the argument is made.

### The argument

This is the way you need to create you argument to make it work:
   ```sh
    const argument = {
     label: "string",
     options: [
      { value: "string", name: "string" },
      { value: "string", name: "string" },
     ],
    }
   ```
The label is basicaly the title of your dropdown. <br />
![Closed dropdown](https://github.com/CedricMlg/cedricm_dropdown/blob/master/public/closed-dropdown.png) <br />
The options is an array of objects where you specify what you want to be displayed in the select, the value will be the value of your option and the name will be what's written in the select. <br />
Be carefull the order needs to be { value , name } if it's { name , value } the value will be what's written in the select. <br />
![Openend dropdown](https://github.com/CedricMlg/cedricm_dropdown/blob/master/public/opened-dropdown.png) <br />
Simply add as many options as you need to choose from.

### Get the selected value

Here is an example of how to get the value that was selected:

   ```sh
    import React, { useState } from "react";
    import { Dropdown } from "cedricm_dropdown";
    
    function App() {
     const [value, setValue] = useState("");
     
     function handleChange(value) {
       setValue(value)
     }
     
     return (
       <div className="dropdown">
          <Dropdown {...argument} onChange={handleChange} />
       </div>
     );
    }
   ```
Keep in mind that the value returned is going to be what you've put in the VALUE field inside the objects of your options array.


I hope this was usefull, if you found this on npm the git repo is at https://github.com/CedricMlg/cedricm_dropdown <br />
thank you for reading and happy coding !!
