window.onload = function(){

	var btn_users = document.querySelector("#btn-users");
	var div_users = document.querySelector("#div-users");


	btn_users.onclick = function(){

		xmlHttpGet('ajax/user', function(){

			beforeSend(function(){

				div_users.innerHTML = `<div class="col-md-12 text-center"><i class="fa fa-refresh fa-spin fa-3x fa-fw"></i><span class="sr-only">Loading...</span></div>`
			
			});

			success(function(){

				console.log(xhttp.responseText);

				var users = JSON.parse(xhttp.responseText);
				
								var table = `<table class="table table-striped">`;
								
								table += `<thead><tr><td>ID</td><td>NOME</td><td>EMAIL</td></tr></thead>`;
				
								table += `<tbody>`;
				
								users.forEach(function(user) {
				
									table += `<tr>`;
									table += `<td>${user.id}</td>`;
									table += `<td>${user.nome}</td>`;
									table += `<td>${user.email}</td>`;
									table += `</tr>`;
									
								});
				
								table += `</tbody></table>`;
				
								div_users.innerHTML = table;

			});


			error(function(){

				div_users.innerHTML("Ocorreu um Erro!")
			});
		
		},'?id=1');		

	}

}