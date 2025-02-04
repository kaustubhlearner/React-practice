import { useState } from "react"
import Checkbox from "./components/Checkbox"

function App() {
  const data = [
    {
      "name": "Indian Institute of Technology Bombay",
      "city": "Mumbai",
      "website": "https://www.iitb.ac.in",
      "students": [
        {
          "name": "Amit Sharma",
          "age": 21,
          "email": "amit.sharma@iitb.ac.in"
        },
        {
          "name": "Priya Desai",
          "age": 22,
          "email": "priya.desai@iitb.ac.in"
        },
        {
          "name": "Rohan Verma",
          "age": 23,
          "email": "rohan.verma@iitb.ac.in"
        }
      ]
    },
    {
      "name": "Indian Institute of Technology Delhi",
      "city": "New Delhi",
      "website": "https://home.iitd.ac.in",
      "students": [
        {
          "name": "Rahul Mehta",
          "age": 23,
          "email": "rahul.mehta@iitd.ac.in"
        },
        {
          "name": "Sneha Kapoor",
          "age": 21,
          "email": "sneha.kapoor@iitd.ac.in"
        }
      ]
    },
    {
      "name": "Indian Institute of Science",
      "city": "Bengaluru",
      "website": "https://www.iisc.ac.in",
      "students": [
        {
          "name": "Karan Joshi",
          "age": 24,
          "email": "karan.joshi@iisc.ac.in"
        },
        {
          "name": "Ananya Rao",
          "age": 22,
          "email": "ananya.rao@iisc.ac.in"
        }
      ]
    },
    {
      "name": "Indian Institute of Technology Madras",
      "city": "Chennai",
      "website": "https://www.iitm.ac.in",
      "students": [
        {
          "name": "Vikas Nair",
          "age": 21,
          "email": "vikas.nair@iitm.ac.in"
        },
        {
          "name": "Pooja Menon",
          "age": 23,
          "email": "pooja.menon@iitm.ac.in"
        }
      ]
    },
    {
      "name": "University of Delhi",
      "city": "New Delhi",
      "website": "http://www.du.ac.in",
      "students": [
        {
          "name": "Arjun Singh",
          "age": 22,
          "email": "arjun.singh@du.ac.in"
        },
        {
          "name": "Neha Verma",
          "age": 21,
          "email": "neha.verma@du.ac.in"
        },
        {
          "name": "Siddharth Malhotra",
          "age": 23,
          "email": "siddharth.malhotra@du.ac.in"
        }
      ]
    },
    {
      "name": "Banaras Hindu University",
      "city": "Varanasi",
      "website": "https://www.bhu.ac.in",
      "students": [
        {
          "name": "Ritika Gupta",
          "age": 22,
          "email": "ritika.gupta@bhu.ac.in"
        },
        {
          "name": "Aakash Pandey",
          "age": 24,
          "email": "aakash.pandey@bhu.ac.in"
        }
      ]
    },
    {
      "name": "Indian Institute of Management Ahmedabad",
      "city": "Ahmedabad",
      "website": "https://www.iima.ac.in",
      "students": [
        {
          "name": "Suresh Patel",
          "age": 23,
          "email": "suresh.patel@iima.ac.in"
        },
        {
          "name": "Divya Shah",
          "age": 22,
          "email": "divya.shah@iima.ac.in"
        }
      ]
    },
    {
      "name": "Jawaharlal Nehru University",
      "city": "New Delhi",
      "website": "https://www.jnu.ac.in",
      "students": [
        {
          "name": "Anjali Roy",
          "age": 22,
          "email": "anjali.roy@jnu.ac.in"
        },
        {
          "name": "Manish Tiwari",
          "age": 24,
          "email": "manish.tiwari@jnu.ac.in"
        }
      ]
    },
    {
      "name": "University of Mumbai",
      "city": "Mumbai",
      "website": "https://mu.ac.in",
      "students": [
        {
          "name": "Rajesh Iyer",
          "age": 24,
          "email": "rajesh.iyer@mu.ac.in"
        },
        {
          "name": "Swati Kulkarni",
          "age": 21,
          "email": "swati.kulkarni@mu.ac.in"
        },
        {
          "name": "Nikhil Deshpande",
          "age": 23,
          "email": "nikhil.deshpande@mu.ac.in"
        }
      ]
    },
    {
      "name": "Anna University",
      "city": "Chennai",
      "website": "https://www.annauniv.edu",
      "students": [
        {
          "name": "Meera Krishnan",
          "age": 21,
          "email": "meera.krishnan@annauniv.edu"
        },
        {
          "name": "Vignesh Reddy",
          "age": 22,
          "email": "vignesh.reddy@annauniv.edu"
        }
      ]
    }
  ]

  return (
    <>
      {data.map((college, index) =>
        <div key={index}>
           <Checkbox college= {college}/>
        </div>
      )}

    </>
  )
}

export default App
