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

	  let UserName = document.getElementById('UserName');
      let UserOccupation = document.getElementById('UserOccupation');
      data.push({id: counter, UserName: UserName.value, UserOccupation: UserOccupation.value });
      console.log(data);
      counter++;
      document.getElementById('UserID').value = counter;
      UserName.value='';
      UserOccupation.value ='';

      let outputSection  = document.getElementById('output');
      let outputData = data[data.length - 1];
      let newP = document.createElement('p');
      newP.textContent = outputData['id'] + " " + outputData['UserName'] + "  "+outputData['UserOccupation'];
      outputSection.appendChild(newP);
      
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

        // names is equal
        return 0;
      });
    }

 function displaySortedData(display){
      let outputSection  = document.getElementById('output');
      outputSection.innerHTML = '';
      let fragment = document.createDocumentFragment();
      data.forEach(function(d) {
          let p = document.createElement('p');
          p.textContent = d['id'] + " " + d['UserName'] + "  "+d['UserOccupation'];
          fragment.appendChild(p);
      });
      outputSection.appendChild(fragment);

    }


    window.addEventListener('load', AddData, false);
