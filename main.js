function downloadPDF() {
  const content = document.getElementById('content');
  const opt = {
    margin: 0,
    filename: 'loan-letter.pdf',
    image: { type: 'jpeg', quality: 1 },
    html2canvas: { scale: 6 },
    jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
  };

  html2pdf().from(content).set(opt).save();
}


function checkFilled(input) {
  if (input.value.trim() !== '') {
    input.style.border = '2px solid black';
  } else {
    input.style.border = '2px solid #ccc';
  }
}


function showInput() {
  var name = document.getElementById("name").value;
    var loan = document.getElementById("loan").value;
    var name = document.getElementById("emi").value;
    var name = document.getElementById("year").value;
    var name = document.getElementById("fees").value;
    
  
    if (name && loan && emi && year && fees) {
    document.getElementById('display').innerHTML = 
          document.getElementById("name").value;
          
    document.getElementById('display2').innerHTML = 
          document.getElementById("loan").value;
          
    document.getElementById('display3').innerHTML = 
          document.getElementById("loantype").value;
              
    document.getElementById('display4').innerHTML = 
          document.getElementById("name").value;
              
    document.getElementById('display5').innerHTML = 
          document.getElementById("emi").value;
          
    document.getElementById('display6').innerHTML = 
          document.getElementById("year").value;
          
    document.getElementById('display7').innerHTML = 
          document.getElementById("fees").value;
          
    document.getElementById('display8').innerHTML = 
          document.getElementById("loan").value;
          
    document.getElementById('display9').innerHTML = 
          document.getElementById("fees").value;
          
  var div = document.getElementById("content");
  var div2 = document.getElementById("dwn-btn");
  var div3 = document.getElementById("form");
  var div4 = document.getElementById("dwn-pic");
  var div5 = document.getElementById("subm");
  
  
  div.style.display = "block";
  div2.style.display = "block";
  div3.style.display = "none";
  div4.style.display = "block";
  div5.style.display = "none";

    }
    else{
      alert('Please Fill Up The Form First');
    }
}

function downloadPic() {
  const myDiv = document.getElementById('content');

  // Create a canvas from the div
  html2canvas(myDiv, {scale: 2}).then(function(canvas) {
    // Convert canvas to an image
    const image = canvas.toDataURL('image/png');

    // Create a link element
    const link = document.createElement('a');
    link.href = image;
    link.download = 'loan-letter.png';

    // Simulate click on the link to download
    link.click();
  });
}

var selectElement = document.getElementById("loantype");
        selectElement.style.fontFamily = "Poppins, Arial, sans-serif";
        

    // JavaScript to update the date in the specified format
    var dateElement = document.getElementById("dateDisplay");
    var currentDate = new Date();

    var day = currentDate.getDate();
    var month = currentDate.getMonth() + 1; // Months are zero-indexed
    var year = currentDate.getFullYear();

    // Ensure single-digit day and month are displayed with leading zeros
    day = day < 10 ? '0' + day : day;
    month = month < 10 ? '0' + month : month;

    var formattedDate = day + '/' + month + '/' + year;

    // Set the formatted date as the content of the span element
    dateElement.textContent = formattedDate;

    