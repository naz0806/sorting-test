
	var row = 1;
    let counter = 1;
    let data = [];
    function AddData(){
      var button = document.getElementById('button');
      button.addEventListener('click', SaveData, false); //
      let sortBy = document.getElementById('sortBy');
      sortBy.addEventListener('change', SortAndDisplay, false);
      document.getElementById('UserID').value = counter;
    }
    function SortAndDisplay(){
      console.log("Sorting Record...", document.getElementById('sortBy').value);
      let sortBy = document.getElementById('sortBy').value;
      if(sortBy === "UserID"){
        data.sort(function (a, b) {
          return a.id - b.id;
        });
      }
      else{
        sortByNameOrOccupation(sortBy);
      }
      console.log(data);
      displaySortedData();
      
      
    }
    function SaveData(){

	 
      var UserName = document.getElementById('UserName').value;
      var UserOccupation = document.getElementById('UserOccupation').value;
      data.push({id: counter, UserName: UserName.value, UserOccupation: UserOccupation.value });
      console.log(data);
      counter++;
      document.getElementById('UserID').value = counter;
      
      let outputSection  = document.getElementById('output');
     
	  var display = document.getElementById("display");
      
      var newRow = display.insertRow(row);
      
      var cell1 = newRow.insertCell(0);
      var cell2 = newRow.insertCell(1);
      var cell3 = newRow.insertCell(2);
      
      cell1.innerHTML = counter - 1;
      cell2.innerHTML = UserName;
      cell3.innerHTML = UserOccupation;

	  row++;
      
      
    }

    function sortByNameOrOccupation(attribute){
      data.sort(function(a, b) {
        var nameA = a[attribute].toUpperCase(); // ignore upper and lowercase
        var nameB = b[attribute].toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }

        // names must be equal
        return 0;
      });
    }

 function displaySortedData(){
      let outputSection  = document.getElementById('output');
      outputSection.innerHTML = '';
      let fragment = document.createDocumentFragment();
      data.forEach(function(d) {
          let p = document.createElement('p');
          p.textContent = d['id'] + " " + d['name'] + "  "+d['occupation'];
          fragment.appendChild(p);
      });
      outputSection.appendChild(fragment);

    }


    window.addEventListener('load', AddData, false);
