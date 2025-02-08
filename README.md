# Gradify

The **Student Grade Calculator** is a simple web application that allows students to calculate their final grade based on scores from two assignments and a final exam.  

### **Project Components & Workflow**  
1. **HTML (Structure)**  
   - Contains a form where users input their grades for **Assignment 1 (0-20), Assignment 2 (0-20), and Final Exam (0-50).**  
   - A button labeled **"Calculate Grade"** submits the form.  
   - Displays the **final numeric grade** and corresponding **letter grade.**  

2. **CSS (Styling & Layout)**  
   - Provides a **clean, centered design** with a white, card-style container.  
   - Uses **flexbox** for alignment, ensuring responsiveness.  
   - Buttons have hover effects for better user experience.  

3. **JavaScript (Functionality & Interactivity)**  
   - **Captures input values** when the form is submitted.  
   - **Calculates the final grade** by summing the inputs and computing the average.  
   - **Assigns a letter grade** based on predefined criteria:  
     - A (≥50), B (≥40), C (≥30), D (≥20), F (<20).  
   - **Updates the webpage dynamically** to display the results.  

### **Final Outcome**  
When a student enters their scores and submits, the app **instantly calculates** their final grade and displays both the numeric value and letter grade, making it a **quick and user-friendly grading tool.**
