function showPreview(ele) {
    $('#imgAvatar').attr('src', ele.value); // for IE
    if (ele.files && ele.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#imgAvatar').attr('src', e.target.result);
        }
        reader.readAsDataURL(ele.files[0]);
    }
}

function showPreview2(ele) {
    $('#imgAvatar2').attr('src', ele.value); // for IE
    if (ele.files && ele.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#imgAvatar2').attr('src', e.target.result);
        }
        reader.readAsDataURL(ele.files[0]);
    }
}

function showPreview3(ele) {
    $('#imgAvatar3').attr('src', ele.value); // for IE
    if (ele.files && ele.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#imgAvatar3').attr('src', e.target.result);
        }
        reader.readAsDataURL(ele.files[0]);
    }
}

function showPreview4(ele) {
    $('#imgAvatar4').attr('src', ele.value); // for IE
    if (ele.files && ele.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#imgAvatar4').attr('src', e.target.result);
        }
        reader.readAsDataURL(ele.files[0]);
    }
}



function FieldRequiredPrintView()
{			 	
    var FieldRequired = new Array 
        (
        document.getElementById("_GenDepartment_Kh").value,
        document.getElementById("_SubDepartment_Kh").value,
        document.getElementById("VehicleClassStatus").value,
        document.getElementById("AssetStatus").value,
        document.getElementById("DueDate").value
        );
    var FieldRequiredName = new Array
        (
            "Enter a search value"
        )
            
    if(!FieldRequired[0] || !FieldRequired[1] || !FieldRequired[2] || !FieldRequired[3] || !FieldRequired[4])
        {
            alert('Please enter a search value');
            return false;
        }
        
    return true;
}

function FieldRequiredPrintView2()
{			 	
    var FieldRequired = new Array 
        (
        document.getElementById("_GenDepartment_Kh").value,
        document.getElementById("_SubDepartment_Kh").value
        );
    var FieldRequiredName = new Array
        (
            "General Department and Subdepartment are required to initiate search"
        )
            
    if(!FieldRequired[0] && !FieldRequired[1] )
        {
            alert('Please enter the General Department and Subdepartment');
            return false;
        }
        
    return true;
}	



function FieldRequiredSearchAll2()
{			 	

    var FieldRequired = new Array 
        (
        document.getElementById("SearchAll2").value
        );
    var FieldRequiredName = new Array
        (
            "Enter a search value"
        )
            
    if(!FieldRequired[0])
        {
            alert('Please enter a search value');
            return false;
        }
        
    return true;
}



function FieldRequiredSearchAll()
{			 	

    var FieldRequired = new Array 
        (
        document.getElementById("SearchAll").value
        );
    var FieldRequiredName = new Array
        (
            "Enter a search value"
        )
            
    if(!FieldRequired[0] && !FieldRequired[1])
        {
            alert('Please enter a search value');
            return false;
        }
        
    return true;
}	






function FieldRequiredMotorcycle()
{			 	

    var FieldRequired = new Array 
        (
        document.getElementById("PlaqueNoSearchAll").value
        );
    var FieldRequiredName = new Array
        (
            "Enter a Plate Number"
        )
            
    if(!FieldRequired[0] && !FieldRequired[1])
        {
            alert('Please enter a Plate Number to initiate the search');
            return false;
        }
        
    return true;
}
function FieldRequiredVehicleType()
{			 	

    var FieldRequired = new Array 
        (
        document.getElementById("VehicleClassStatus").value
        );
    var FieldRequiredName = new Array
        (
            "Choose a Vehicle Type"
        )
            
    if(!FieldRequired[0] && !FieldRequired[1])
        {
            alert('Vehicle Type is a required field');
            return false;
        }
        
    return true;
}

function FieldRequiredVehicle()
{			 	

    var FieldRequired = new Array 
        (
            document.getElementById("PlaqueNoSearchAll").value,
            document.getElementById("VehicleClassStatus").value
            
        );
    var FieldRequiredName = new Array
        (
            "Vehicle Plate No. and Vehicle Class are required fields"
        )
        
    if(!FieldRequired[0] && !FieldRequired[1])
        {
            alert('Vehicle Plate No. and Vehicle Class are required fields');
            return false;
        }
        
    return true;
}

function FieldRequiredSearchVehicle()
{			 	

    var FieldRequired = new Array 
        (
            document.getElementById("rpi1").value,
            document.getElementById("rpi2").value,
            document.getElementById("rpi3").value
            
        );
    var FieldRequiredName = new Array
        (
            "Khmer name is required",
            "English name is required",
            "Company is required"
        )
        
    if(!FieldRequired[0] && !FieldRequired[1] && !FieldRequired[2])
        {
            alert('Khmer name, english name or company is a required field');
            return false;
        }
        
    return true;
}


function FieldRequired3()
{			 	

    var FieldRequired = new Array 
        (				
            document.getElementById("vei1").value,
            document.getElementById("vei2").value,
            document.getElementById("vei3").value,
            document.getElementById("vei4").value,
            document.getElementById("vei5").value
            
        );
    var FieldRequiredName = new Array
        (
            "Initial Vehicle Identification Number",
            "Plate No.",
            "Vehicle Chasis No.",
            "Vehicle Engine No.",
            "APB Status."
        )
            
    if(!FieldRequired[0] && !FieldRequired[1] && !FieldRequired[2] && !FieldRequired[3])			
        {
            if(!FieldRequired[4])
            {
            alert('Initial Vehicle Identification Number, Plate No., Vehicle Chasis No., and Vehicle Engine No. is a required field');
            return false;
            }
        }
        
    return true;
}

function FieldRequiredAddVio()
{			 	

    var FieldRequired = new Array 
        (
            document.getElementById("addvio1").value,
            document.getElementById("addvio2").value,
            document.getElementById("addvio3").value,
            document.getElementById("addvio4").value,
            document.getElementById("addvio5").value,
            document.getElementById("addvio6").value
            
        );
    var FieldRequiredName = new Array
        (
        "Initial Vehicle Identification Number",
            "Plate No.",
            "Vehicle Chasis No.",
            "Vehicle Engine No.",
            "Vehicle Engine No.",
            "Vehicle Engine No."
        )
            
    if(!FieldRequired[0] || !FieldRequired[1] || !FieldRequired[2] || !FieldRequired[3] || !FieldRequired[4] || !FieldRequired[5])
        {
            alert('All fields are required');
            return false;
        }
        
    return true;
}



function FieldRequiredAddWebUser()
{			 	

    var FieldRequired = new Array 
        (
            document.getElementById("addwu1").value,
            document.getElementById("addwu2").value,
            document.getElementById("addwu3").value,
            document.getElementById("addwu4").value,
            document.getElementById("addwu5").value,
            document.getElementById("addwu6").value,
            document.getElementById("addwu7").value,
            document.getElementById("addwu8").value,
            document.getElementById("addwu9").value,
            document.getElementById("addwu10").value,				
            document.getElementById("addwu11").value,
            document.getElementById("addwu12").value				
            
        );
    
    if(!FieldRequired[0] || !FieldRequired[1] || !FieldRequired[2] || !FieldRequired[3] || !FieldRequired[4] || !FieldRequired[5] || !FieldRequired[6] || !FieldRequired[7] || !FieldRequired[8] || !FieldRequired[9] || !FieldRequired[10] || !FieldRequired[11])
        {
            alert('All fields are required');
            return false;
        }
        
    return true;
}

function FieldRequiredEditWebUser()
{			 	

    var FieldRequired = new Array 
        (
            document.getElementById("addwu1").value,
            document.getElementById("addwu2").value,
            document.getElementById("addwu3").value,
            document.getElementById("addwu4").value,
            document.getElementById("addwu5").value,
            document.getElementById("addwu6").value,
            document.getElementById("addwu7").value
            
        );
    
    if(!FieldRequired[0] || !FieldRequired[1] || !FieldRequired[2] || !FieldRequired[3] || !FieldRequired[4] || !FieldRequired[5] || !FieldRequired[6])
        {
            alert('All fields are required');
            return false;
        }
        
    return true;
}

function FieldRequiredEditWebUserPassword()
{			 	

    var FieldRequired = new Array 
        (
            document.getElementById("eup1").value,
            document.getElementById("eup2").value				
            
        );
        
    if(!FieldRequired[0] || !FieldRequired[1])
        {
            alert('All fields are required');
            return false;
        }
    else if(FieldRequired[0] != FieldRequired[1])
        {
            alert('The passwords you entered do no match.');
            return false;
        }
    else
        {
            alert('Password changed.');
            return true;
        }
}

function FieldRequiredAddAPB()
{			 	

    var FieldRequired = new Array 
        (
            document.getElementById("addapb1").value,
            document.getElementById("addapb2").value,
            document.getElementById("addapb3").value,				
            document.getElementById("addapb4").value				
            
        );
    
    if(!FieldRequired[0] || !FieldRequired[1] || !FieldRequired[2] || !FieldRequired[3])
        {
            alert('All fields are required');
            return false;
        }
        
    return true;
}
