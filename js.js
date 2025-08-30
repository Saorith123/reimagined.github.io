const data = [
        {
            "id": 1,
            "licensePlate": "កណ្ដាល 1AG-1808",
            "type": "ទោចក្រយានយន្ត",
            "brand": "HONDA DREAM",
            "color": "ខ្មៅ",
            "engineNumber": "ND1***30549",
            "bodyNumber": "ND125M******30549",
            "enginePower": "125cc",
            "cylinderSize": "NIL",
            "yearOfManufacture": "2019",
            
            "licensePlateEng": "Kadal 1AG-1808",
            "typeEng": "MOTORCYCLE",
            "brandEng": "HONDA DREAM",
            "colorEng": "Black",
            "engineNumberEng": "ND1***30549",
            "bodyNumberEng": "ND125M******30549",
            "enginePowerEng": "125cc",
            "cylinderSizeEng": "NIL",
            "yearOfManufactureEng": "2019"
        },
        {
            "id": 1,
            "licensePlate": "តាកែវ 1RD-2023",
            "type": "ទោចក្រយានយន្ត",
            "brand": "HONDA DREAM",
            "color": "ស",
            "engineNumber": "ND1***30549",
            "bodyNumber": "ND125M******32345",
            "enginePower": "345cc",
            "cylinderSize": "MID",
            "yearOfManufacture": "2023",

            "licensePlateEng": "Takeo 1RD-2023",
            "typeEng": "MOTORCYCLE",
            "brandEng": "HONDA DREAM",
            "colorEng": "White",
            "engineNumberEng": "ND1***30549",
            "bodyNumberEng": "ND125M******32345",
            "enginePowerEng": "345cc",
            "cylinderSizeEng": "MID",
            "yearOfManufactureEng": "2023"
        }
    ]

$(document).ready(function() {
    $("#kh").click(function() {
        // alert('kh');
        $(".KH").show();
        $("#kh").removeClass("btn-default");
        $("#kh").addClass("btn-primary active");
        $("#en").removeClass("btn-primary active");
        $("#en").addClass("btn-default");
        $("#english").hide();
        $("#khmer").show();
    });
    $("#en").click(function() {
      // alert('en');
        $("#english").removeClass("hide");
        $("#en").removeClass("btn-default");
        $("#en").addClass("btn-primary active");
        $("#kh").removeClass("btn-primary active");
        $("#kh").addClass("btn-default");
        $("#khmer").hide();
        $("#english").show();
    });

    //---------
    $(function() {
      //save the latest tab (http://stackoverflow.com/a/18845441)
      $('a[data-toggle="tab"]').on('click', function (e) {
          localStorage.setItem('lastTab', $(e.target).attr('href'));
      });
      //go to the latest tab, if it exists:
      var lastTab = localStorage.getItem('lastTab');
      if (lastTab) {
          $('a[href="'+lastTab+'"]').click();
      }
    //end of tab
    });


    //Get currect location url
    const currentURL = window.location.href;

    var url = currentURL.split("/")[currentURL.split("/").length - 1]

    var code = url.split(".")[0]

    console.log(code)
    // console.log(currentURL.split("/")[currentURL.split("/").length - 1])

    //Condition with path name and data
    var dataUse = {};

    if(code === "QRKD"){
        dataUse = data[0]
    } else if(code === "QRTK") {
        dataUse = data[1]
    }

    //add data to UI
    //KH
    $("#licensePlateTitle").html(dataUse.licensePlate);
    $("#licensePlate").html(dataUse.licensePlate);
    $("#brand").html(dataUse.brand);
    $("#type").html(dataUse.type);
    $("#color").html(dataUse.color);
    $("#engineNumber").html(dataUse.engineNumber);
    $("#bodyNumber").html(dataUse.bodyNumber);
    $("#enginePower").html(dataUse.enginePower);
    $("#cylinderSize").html(dataUse.cylinderSize);
    $("#yearOfManufacture").html(dataUse.yearOfManufacture);

    //END
    $("#licensePlateTitleEng").html(dataUse.licensePlateEng);
    $("#licensePlateEng").html(dataUse.licensePlateEng);
    $("#brandEng").html(dataUse.brandEng);
    $("#typeEng").html(dataUse.typeEng);
    $("#colorEng").html(dataUse.colorEng);
    $("#engineNumberEng").html(dataUse.engineNumberEng);
    $("#bodyNumberEng").html(dataUse.bodyNumberEng);
    $("#enginePowerEng").html(dataUse.enginePowerEng);
    $("#cylinderSizeEng").html(dataUse.cylinderSizeEng);
    $("#yearOfManufactureEng").html(dataUse.yearOfManufactureEng);
});