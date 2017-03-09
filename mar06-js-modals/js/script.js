var modalDiv = document.getElementById('modal');

// FUNCTIONS
function createModal(modalType, modalMsg){
    // VARIABLES
   var formEle = document.createElement('form'),
       inputOne = document.createElement('input'),
       inputConfirm = document.createElement('input'),
       inputCancel = document.createElement('input');

    modalMessage.textContent = modalMsg;

    // ATTRIBUTES
    inputOne.type = 'text';
    inputOne.placeholder = 'your response';
    inputConfirm.type = 'submit';
    inputConfirm.value = 'confirm';
    inputCancel.type = 'button';
    inputCancel.value = 'cancel';

    // IF APPENDS
    formEle.append(modalMsg)
    if(modalType === 'prompt'){
        formEle.append(inputOne);
        formEle.append(inputCancel);
    }else if(modalType === 'confirm'){
        modalDiv.append(inputCancel);
    }
    modalDiv.append(inputConfirm);
    formEle.append(modalDiv);

    modalDiv.append(formEle);

    inputCancel.addEventListener('click', function(){
        console.log('user clicked cancel');
        modalDiv.removeChild(formEle);
        modalDiv.classList.remove('active');
    });
    inputConfirm.addEventListener('click', function(evt){
        evt.preventDefault();
        var userInput = inputOne.value;
        console.log('user clicked confirm');
    });
}

createModal('prompt', 'Do you like black licorice?');
