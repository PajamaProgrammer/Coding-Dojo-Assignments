var max = 900;
var min = 50;

$(document).ready(function(){

    $('#AddClassBtn').click(function(){
        $('#addRed').addClass('red');
        //alert('add red');
    });

    $('#SlideToggleBtn').click(function(){
        $("#imgToggle").slideToggle( "slow", function() {
        });
        //alert('Show an image!');
    });

    $('#AppendBtn').click(function(){
        $("#AppendP").append("<br><p>"+paragraphs[Math.floor(Math.random()*paragraphs.length)]);
        //alert('Append a paragraph');
    });

    $("#ValForm").keyup(function() {
        var value = $(this).val();
        $("#AddText").text(value);
    }).keyup();

    $('#AttrBtn').click(function(){
        //alert('Change Picture');
        $("#imgAttr").attr("width", Math.floor(Math.random()*max + min));
        $("#imgAttr").attr("height", Math.floor(Math.random()*max + min));
    });

    $('#HtmlBtn').click(function(){
        $("p").html("<p>"+paragraphs[Math.floor(Math.random()*paragraphs.length)]);
    });

    $("#DataDiv button").click(function() {
    var value;

        switch ($("#DataDiv button").index(this)) {
            case 0 :
                value = $("div").data("content");
                break;
            case 1 :
                $("div").data("content", "HappyData");
                value = "Stored!";
                break;
            case 2 :
                $("div").data("content", "BadData");
                value = "Stored!";
                break;
            case 3 :
                $("div").removeData("content");
                value = "Removed!";
                break;
        }
        $("span").text( "" + value );
    });

    $("#SlideBtn").click(function() {
        if ($("p:first").is(":hidden")) {
            $("p").slideDown("slow");
        } else {
            $("p").slideUp("slow");
        }
    });

    $("#FadeBtn").click(function() {
        if ($("#imgFade").is(":hidden")) {
            $("#imgFade").fadeIn("slow");
        } else {
            $("#imgFade").fadeOut("slow");
        }
    });

});


var paragraphs = [
    "Now, as the harem of whales is called by the fishermen a school, so is the lord and master of that school technically known as the schoolmaster. It is therefore not in strict character, however admirably satirical, that after going to school himself, he should then go abroad inculcating not what he learned there, but the folly of it. His title, schoolmaster, would very naturally seem derived from the name bestowed upon the harem itself, but some have surmised that the man who first thus entitled this sort of Ottoman whale, must have read the memoirs of Vidocq, and informed himself what sort of a country-schoolmaster that famous Frenchman was in his younger days, and what was the nature of those occult lessons he inculcated into some of his pupils.",
    '"Long absence!" he repeated in evident astonishment. "What do you mean?"',
    '"Oh, indeed," said the Woodman, making a bow.',
    '"And more still I have to say, ere it is again too late," I returned. "I have done many strange things in my life, many things that wiser men would not have dared, but never in my wildest fancies have I dreamed of winning a Dejah Thoris for myself—for never had I dreamed that in all the universe dwelt such a woman as the Princess of Helium. That you are a princess does not abash me, but that you are you is enough to make me doubt my sanity as I ask you, my princess, to be mine."',
    'Never did those sweet words sound more sweetly to me than then. They were full of hope and fruition. Spite of this frigid winter night in the boisterous Atlantic, spite of my wet feet and wetter jacket, there was yet, it then seemed to me, many a pleasant haven in store; and meads and glades so eternally vernal, that the grass shot up by the spring, untrodden, unwilted, remains at midsummer.',
    "DANISH SAILOR. Crack, crack, old ship! so long as thou crackest, thou holdest! Well done! The mate there holds ye to it stiffly. He's no more afraid than the isle fort at Cattegat, put there to fight the Baltic with storm-lashed guns, on which the sea-salt cakes!",
    '"I will come back to America to find him," said Phileas Fogg calmly. "It would not be right for an Englishman to permit himself to be treated in that way, without retaliating."',
    "The consul did not finish his sentence, for as he spoke a knock was heard at the door, and two strangers entered, one of whom was the servant whom Fix had met on the quay. The other, who was his master, held out his passport with the request that the consul would do him the favour to visa it. The consul took the document and carefully read it, whilst Fix observed, or rather devoured, the stranger with his eyes from a corner of the room.",
    "So assured, indeed, is the fact concerning the periodicalness of the sperm whale's resorting to given waters, that many hunters believe that, could he be closely observed and studied throughout the world; were the logs for one voyage of the entire whale fleet carefully collated, then the migrations of the sperm whale would be found to correspond in invariability to those of the herring-shoals or the flights of swallows. On this hint, attempts have been made to construct elaborate migratory charts of the sperm whale.*",
    '"This at first seemed a great misfortune, for I knew a one-legged man could not do very well as a wood-chopper. So I went to a tinsmith and had him make me a new leg out of tin. The leg worked very well, once I was used to it. But my action angered the Wicked Witch of the East, for she had promised the old woman I should not marry the pretty Munchkin girl. When I began chopping again, my axe slipped and cut off my right leg. Again I went to the tinsmith, and again he made me a leg out of tin. After this the enchanted axe cut off my arms, one after the other; but, nothing daunted, I had them replaced with tin ones. The Wicked Witch then made the axe slip and cut off my head, and at first I thought that was the end of me. But the tinsmith happened to come along, and he made me a new head out of tin.',
    'It seemed a hopeless job and I gave it up, temporarily at least, for when I contemplated the necessity explanation of our solar system and the universe I realized how futile it would be to attempt to picture to Ja or any other Pellucidarian the sun, the moon, the planets, and the countless stars. Those born within the inner world could no more conceive of such things than can we of the outer crust reduce to factors appreciable to our finite minds such terms as space and eternity.',
    "Ought she not to have gone yesterday?",
    "'It's all about as curious as it can be,' said the Gryphon."
];