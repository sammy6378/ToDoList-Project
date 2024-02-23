const btn = document.querySelector('.add-task');

const input = document.getElementById('task');
const showTask = document.querySelector('.show-task');

const timeWork = document.getElementById('time');
const small = document.querySelector('.small')

const now = new Date();
const currentHour = now.getHours();
const isPM = currentHour >= 12;

let amPmString = isPM ? 'PM' : 'AM';

btn.addEventListener('click', () => {
 
    if(input.value.trim() === '' || timeWork.value.trim() === ''){
        input.style.borderColor = 'red';
        small.innerText = 'OOPs! No task is currently added!';
    }else{

        let div = document.createElement('div');
        div.classList.add('list-items');
    
        // Create an li element
        let li = document.createElement('li');
        li.classList.add('list');
        li.innerText = `${input.value}`;
        div.appendChild(li);

        let time = document.createElement('span');
        time.innerHTML = ` ${timeWork.value} ${amPmString}`;
        time.classList.add('time');
        div.appendChild(time);

        let done = document.createElement('button');
        done.innerHTML = `✔`;
        done.classList.add('done');
        div.appendChild(done);

        let delt = document.createElement('button');
        delt.innerHTML = `❌`;
        delt.classList.add('delete');
        div.appendChild(delt);
    
        
        // Append div to showTask
        showTask.appendChild(div);  

        done.addEventListener('click', function (){
            li.style.textDecoration = "line-through";
            time.style.color = 'red';
            // done.innerHTML = ''
            done.style.background = 'orange';
        });

        delt.addEventListener('click', function (e){
          let target = e.target;

          target.parentElement.remove();
        });

    }

        input.value ='';
        timeWork.value = '';
    
   
});


input.addEventListener('input', () =>{
    input.style.borderColor = 'blue';
    small.innerText = '';
})
