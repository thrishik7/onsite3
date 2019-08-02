

const app = {};const token='BQANrouDACmH8B6GEAiJRS0ThfLNsAY7P0La2eSy3jHEDhkjY2V5uAdyL-brqTs_S2xUZEZpNQv_PqgLPG_oBI5zQOw1N2xSLW6D-W_tAKePIWebwj7B0qMnQFXjMFFfSTw2xXYYM8DwTkRs9jVlqmwQjxNAU2FdgA'

let arryartist1=[];
let arryartist2=[];
let path=[];
let nameart1="";
var limit=0;
var dfc=0;
function getdata(artistName,artist2,artist1)
{
    limit++;
    
$.ajax({
	url: 'https://api.spotify.com/v1/search',
	method: 'GET',
	dataType: 'json',
	headers: {
       'Authorization': 'Bearer ' + token
   },
   success: function(data){
		let id1= data.artists.items[0].id;
		let nameart1=data.artists.items[0].name;
		getartist(id1,nameart1,artist2,artist1);
		
   	   },
	data: {
		type: 'artist',
		q: artistName,
	}
});

}

function cool(arry)
{
   console.log(arry);
}


function getartist(id,nameart1,artist2,artist1)
{
	$.ajax({
		url: 'https://api.spotify.com/v1/artists/'+id+'/related-artists',
		method: 'GET',
		dataType: 'json',
		headers: {
		   'Authorization': 'Bearer ' + token
	   },
	   success: function(data){
                let ar=0;
                path=[];    
                outerloop:
             
			while(ar<5)
			{
           
             
			namd=data.artists[ar].name;
            
           
            
            if(namd==artist2)
            {
                while(dfc<1)
                {

                console.log("wow");
             console.log(path);
             
            
             document.getElementById("output").innerHTML+="<strong style='color:blue;'>"+artist1+"</strong>->";
             for(var c=0; c< path.length; c++)
             {
                document.getElementById("output").innerHTML+=path[c]+"->";
             
             
             }
             document.getElementById("output").innerHTML+="<strong style='color:blue;' >"+artist2+"</strong>";

              dfc++;
            }

            }
            else
            {
                console.log(limit);
                if(limit<6)
                {
                path.push(namd);
                getdata(namd,artist2,artist1);
                }
                else
                {

                    path.pop();
                   limit=0;
                }
         
            }
            ar++;
            console.log(path);
		}

	
		
	},
		data: {
			type: 'artist',
			
		}
	});
	
}


app.init = function() {
	$('form').on('submit', function(e) {
    
        e.preventDefault();
        



		let artist1 = $('#artist1').val();
        let artist2= $('#artist2').val();

		 getdata(artist1,artist2,artist1);
	
        // getdata(artist2);
	







	
	});
	
}


$(app.init);

