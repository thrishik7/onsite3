

const app = {};const token='BQABLQQs26eYMOMrRtK1Tr6L8K3jip1WcMJyT-xIDWQM7BaImNFDcD4LyxX57cRb3oqDwhg8UO1Pexm6Iwf5de2f_vKV3Dm-mWtYNHZWnMuDzCxCdJ3rAg3yDCcamPTcSf_EHLbjMurqXId7VwJ3Xf2r3mk82WStlg';
let arryartist1=[];
let arryartist2=[];
let path=[];

let patha={};
let nameart1="";
var limit=0;
var dfc=0;
var f=0;
var k=0;
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
              

                console.log("wow");
                console.log(patha[0]);


                  for(var d=0; d<patha.length; d++)
                  {
                     console.log(patha[d]);
                      
                    if(patha[d]==path)
                   {
                      k=2;
                     }
                  }


       if(k!=2)
        {    
                patha[f]=path;
                f++; 
                

           }
              

             document.getElementById("output").innerHTML+="<div>";
             document.getElementById("output").innerHTML+="<strong style='color:blue;'>"+artist1+"</strong>->";
             for(var c=0; c< path.length; c++)
             {
                document.getElementById("output").innerHTML+=path[c]+"->";
             
             
             }
             document.getElementById("output").innerHTML+="<strong style='color:blue;' >"+artist2+"</strong>";
            
            document.getElementById("output").innerHTML+="</div>";

            }
            else
            {
                
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

