window.onload = function () {
document.querySelector('#loading')
}
setTimeout(function () {
		loading.style.display='none'
},500)


function removeU() {
                    var xu = document.querySelector('#js-u').value.length
                    var yu = document.querySelector('#js-cl-u').style
                    var zu = document.querySelector('#error1').style

                    if (xu > 0) {
                        yu.display = 'block'
                        zu.display = 'none'

                    } else {
                        yu.display = 'none'
                        zu.display = 'block'

                    }
                }
function removeP() {
                    var xp = document.querySelector('#js-p').value.length
                    var yp = document.querySelector('#js-cl-p').style
                    var zp = document.querySelector('#error2').style
                    if (xp > 0) {
                        yp.display = 'block'
                        zp.display = 'none'
                    } else {
                        yp.display = 'none'
                        zp.display = 'block'
                    }

                }

                function pre() {
                    const pass = document.querySelector('#js-p')
                    if (pass.type === 'password') {
                        pass.type = 'text'
                        document.querySelector('#js-pre').dataset.icon = 'ph:hand-eye-thin'
                    } else {
                        pass.type = 'password'
                        document.querySelector('#js-pre').dataset.icon = 'ph:eye-closed-thin'
                    }
                }

                function deleteU() {
                    document.querySelector('#js-u').value = ''
                    document.querySelector('#js-cl-u').style.display = 'none'
                }

                function deleteP() {
                    document.querySelector('#js-p').value = ''
                    document.querySelector('#js-cl-p').style.display = 'none'
                }

function mySearch() {

	var modal = document.querySelector('.modal')
function modalPre(){
  modal.style.display = 'block'
}
function modalHide() {
  modal.style.display = 'none'
}
if (modal.style.display = 'none') {
		modalPre()
}else {
		modalHide()
}
modal.addEventListener("click", (e) => {
  if (e.target == e.currentTarget) 
  modalHide()
})

window.addEventListener("scroll", modalHide )

document.querySelector('#my-search').oninput = 
function() {
var x = document.querySelector('#my-search').value
document.querySelector('#search-shop').innerHTML = x
document.querySelector('#search-product').innerHTML = x
 if (x.length > 0){
document.querySelector('#search-trending').style.display = 'none';  
document.querySelector('#search-suggest').style.display = 'block';
}if(x.length == 0){	
document.querySelector('#search-trending').style.display = 'block';
document.querySelector('#search-suggest').style.display = 'none';
}}
}