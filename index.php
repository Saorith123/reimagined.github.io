<link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
<script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<!------ Include the above in your HEAD tag ---------->






<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.1.0/css/all.css" integrity="sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt" crossorigin="anonymous">
<div class="container">
    <h2 class="text-center">Google reCAPTCHA Tutorial from rizkancool</h2>
	<div class="row justify-content-center">
		<div class="col-12 col-md-8 col-lg-6 pb-5">


                    <!--Form with header-->

                    <form id="contactfrm" >
                        <div class="card border-primary rounded-0">
                            <div class="card-header p-0">
                                <div class="bg-info text-white text-center py-2">
                                    <h3><i class="fa fa-envelope"></i> Google reCAPTCHA Form</h3>
                                    <p class="m-0">Tutorial Form</p>
                                </div>
                            </div>
                            <div class="card-body p-3">

                                <!--Body-->
                                <div class="form-group">
                                    <div class="input-group mb-2">
                                        <div class="input-group-prepend">
                                            <div class="input-group-text"><i class="fa fa-user text-info"></i></div>
                                        </div>
                                        <input type="text" class="form-control" name="name" placeholder="Name">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="input-group mb-2">
                                        <div class="input-group-prepend">
                                            <div class="input-group-text"><i class="fa fa-envelope text-info"></i></div>
                                        </div>
                                        <input type="email" class="form-control" name="email" placeholder="rizkan.office@gmail.com">
                                    </div>
                                </div>

                                <div class="form-group">
                                    <div class="input-group mb-2">
                                        <div class="input-group-prepend">
                                            <div class="input-group-text"><i class="fa fa-comment text-info"></i></div>
                                        </div>
                                        <textarea class="form-control" name="message" placeholder="Message"></textarea>
                                    </div>
                                </div>

                                <div class="text-center">
                                    <div id="status"></div>
                                    <button type="submit" data-sitekey="6LcSesMZAAAAAGU4vMzsqLDZJDXYyLYnoyXAWRFzim" data-callback="onSubmit" data-action="submit" class="g-recaptcha btn btn-info btn-block rounded-0 py-2">Send</button>
                                </div>
                            </div>

                        </div>
                    </form>
                    <!--Form with header-->


<script>

        function onSubmit(token) {
        var formData = $("#contactfrm").serialize();
        $(".has-error").removeClass("has-error");
        
        $.ajax({
                type: "POST",
                url: 'mail.php',
                data: formData,
                success: function (data) {
                    $('#status').html('<div  class="alert alert-success alert-dismissable">Your Query Sent Successfully We will Contact you Soon</div>');
                    $('#contactfrm')[0].reset();
                }
            });
        
        
    }

    
</script>


                </div>
	</div>
</div>

<!-- captcha -->
<script src="https://www.google.com/recaptcha/api.js"></script>

<!-- jQuery -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>