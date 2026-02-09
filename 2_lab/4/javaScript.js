let studentCount = 0;

do {
    let studentName = prompt('Введите имя нового студента!');
    if (studentName !== null) {
        studentName = studentName.trim();
        
        if (studentName) {
            alert(`Добро пожаловать, ${studentName}!`);
        }
    }
    
    studentCount += 1;
} while (studentCount < 3);