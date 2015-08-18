var uE = document.getElementById('user');
var pE = document.getElementById('pass');
var user;
var pass;
function save_options()
{
	user = uE.value;
	pass = pE.value;
	chrome.storage.sync.set({username: user, password: pass},function(){var status = document.getElementById('status');status.textContent = 'Login saved.';setTimeout(function(){status.textContent = '';}, 750);});
}
function restore_options()
{
	chrome.storage.sync.get({username: 'admin', password: ''},function(items){uE.value = items.username;pE.value = items.password;});
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);
