

const app = {};const token='BQDIVX6H5elsG-SxeRXe0ZEZmIUQVPdT3XvOXNJ-6Vi-KSxCCGkc-iBKOnT3Me1mAr89Ewm9w4BMlXaXIpMqmUchiOo8Fj_LNfnnxVKdbHcuXjuW4kuHA0R_daigwydbrqB8zDi-bQ-0o1d12Ha9QxHAinzJdXCKSg'

let arryartist1=[];
let arryartist2=[];
var search=0;
let path=[];
let nameart1="";
var limit=0;
var search=0;
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
                let br=0;
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
                 search=1;
           
           
                }

            ar++;
            
        }


           if(search!=1)
           {

          
            
            while(br<5)
            {
                namd=data.artists[br].name;
                console.log(limit);
                if(limit<6)
                {
                path.push(namd);
                
                getdata(namd,artist2,artist1);
                }
                else
                {limit=0;

                }
             
                br++;
            }
           
        }
            console.log(path);
		

	
		
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

