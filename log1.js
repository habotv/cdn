<script type='text/javascript'>
        var BLOCKED_URL = ' ';
        var FORWARDING_URL = 'https://raket2.blogspot.com/';
        if (document.referrer == BLOCKED_URL) {
            location.href = FORWARDING_URL;
        }
        
        var b = 'https://maborstream.blogspot.com/';
        if (document.referrer.indexOf(b) != -1) {
            location.href = 'https://www.google.com/';
        }
</script>