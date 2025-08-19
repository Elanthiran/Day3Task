# 🌍 Day3Task  

This project demonstrates how to work with APIs, JSON data, and object comparison in JavaScript.  

---

## ✨ Features  

1. **Compare Two JSON Objects**  
   - Check if two JSON objects have the same properties, even if the order is different.  

2. **Display Country Flags using REST Countries API**  
   - Fetch data from `https://restcountries.com/v3.1/all`.  
   - Print all country flags in the console.  

3. **Print Country Details (Name, Region, Sub-region, Population)**  
   - Fetch data from `https://restcountries.com/v3.1/all`.  
   - Display the country’s **name**, **region**, **sub-region**, and **population** in the console.  

---

## 📂 Project Structure  

Day3Task/
│── first/
│   │── js-script.js         # Print all country flags
│   │── index.html       # HTML file for flags output
│
│── second/
│   │── js-script.js   # Print country details (name, region, subregion, population)
│   │── index.html        # HTML file for country details
│
│── third/
│   │── js-script.js     # Compare two JSON objects
│   │── index.html       # HTML file for JSON comparison
│
│── README.md             # Project documentation




---

## 📥 Clone  

```bash
git clone https://github.com/Elanthiran/Day3Task.git
cd Day3Task
```


## ▶️ Usage

Run any script in the browser or using Node.js:

```bash
node first/js-script.js
node second/flags.js
node third/countries-info.js
```

Or include them in index.html to run directly in the browser.

🖼️ Example Output

Compare JSON Objects:
```bash
true
```
Country Info Example:
```bash
India Asia Southern Asia 1407563842
```


🛠️ Tech Stack
---
1. JavaScript (ES6+)

2. REST Countries API

3. Browser Console / Node.js

🚧 Future Improvements
---
- Show country flags and details directly in the web page (not only console).

- Add search functionality for a specific country.

- Improve UI using HTML & CSS.

🤝 Contributing
---
Contributions are welcome!

- Fork the repo

- Create a branch (feature-new)

- Commit changes

- Open a Pull Request


📜 License
---

This project is licensed under the MIT License.

