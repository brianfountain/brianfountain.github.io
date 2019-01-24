var audio = {
    obj: null,
    build: function () {
        obj = document.getElementById("audio");

        $("#scrubber .play-pause").click(function () {
            if (audio.player.state != "done") {
                if (audio.player.state == "playing") {
                    audio.player.pause();
                } else {
                    audio.player.play();
                }
            } else {
                audio.player.replay();
            }

        });

        $(".cc-button").click(function () {
            if (audio.captions.state == "opened") {
                audio.captions.close();
            } else {
                audio.captions.open();
            }
        });

        $("#play-icon").attr("d", audio.icons.playPath);
        $("#captions-icon").attr("d", audio.icons.captionsPath);
        $("#messages").addClass("close");

    },

    icons: {
        playPath: "M10 10, 17 10, 17 30, 10 30z M23 10, 30 10, 30 15, 30 30, 23 30z",
        pausePath: "M10 5, 11 5, 11 35, 10 35z M10 5, 29 19, 30 20, 29 21, 10 35z",
        replayPath: "M21.6,34.6c-4,0-7.5-1.5-10.3-4.1l3-4.2c2,2,4.4,3.3,7.3,3.3c5.5,0,10-4.5,10-10c0-5.5-4.5-9.9-10-9.9 c-4.6,0-8.9,4.3-9.8,8.3h5L9.2,29.1L1.5,18h5.3C7.6,11,14,4.7,21.6,4.7c8.3,0,15,6.7,15,15C36.6,27.9,29.9,34.6,21.6,34.6z",
        captionsPath: "M19.5,22.3l0.2,2.6c-1.4,0.3-2.6,0.5-3.7,0.5c-0.7,0-1.4-0.1-2-0.2s-1.3-0.4-1.9-0.7c-0.6-0.3-1.2-0.7-1.6-1.2 c-0.5-0.5-0.8-1.1-1.1-1.8C9,20.7,8.9,19.9,8.9,19c0-2.1,0.6-3.8,1.9-4.9c1.3-1.1,3-1.7,5.2-1.7c1,0,2.3,0.2,3.7,0.6l-0.3,2.7 c-1.1-0.7-2.2-1-3.3-1c-1.2,0-2.1,0.4-2.8,1.2c-0.7,0.8-1.1,1.8-1.1,3c0,1.2,0.4,2.2,1.2,2.9s1.8,1.1,3,1.1                           C17.4,23,18.4,22.8,19.5,22.3z M31.5,22.3l0.2,2.6c-1.4,0.3-2.6,0.5-3.7,0.5c-0.7,0-1.4-0.1-2-0.2c-0.7-0.1-1.3-0.4-1.9-0.7 c-0.6-0.3-1.2-0.7-1.6-1.2c-0.5-0.5-0.8-1.1-1.1-1.8c-0.3-0.7-0.4-1.6-0.4-2.5c0-2.1,0.6-3.8,1.9-4.9c1.3-1.1,3-1.7,5.2-1.7 c1,0,2.3,0.2,3.7,0.6l-0.3,2.7c-1.1-0.7-2.2-1-3.3-1c-1.2,0-2.1,0.4-2.8,1.2s-1.1,1.8-1.1,3c0,1.2,0.4,2.2,1.2,2.9s1.8,1.1,3,1.1                  C29.4,23,30.4,22.8,31.5,22.3z",
        menuPathStatic: "M3 7, 31 7, 31 10, 3 10z M3 13, 38 13, 38 16, 3 16z M3 19, 31 19, 31 22, 3 22z M40 15.5, 50 3, 53 5, 45.5 14, 70 14, 70 17, 45.5 17, 53 25, 50 27z",
        menuPathHover: "M-6 7, -3 7, -3 10, -6 10z M-6 13, -1 13, -1 16, -6 16z M-6 19, -3 19, -3 22,-6 22z M5 15.5, 15 3, 18 5, 10.5 14, 35 14, 35 17, 10.5 17, 18 25, 15 27z",
        oldReplayPath: "M10 25, 14 25, 14 31, 30 31, 30 9, 14 9, 14 15, 18 15, 12 22, 5 15, 10 15, 10 5, 34 5, 34 35, 10 35z"


    },

    player: {

        time: 0,
        percent: 0,
        state: "paused",
        loop: "no-loop",
        volume: 0,
        source: "null",
        view: "hidden",
        ready: 1,

        load: function (src, autoplay, nocc, loop) {
            if (src == "undefined" || src == "null") {
                audio.player.source = "null";
            } else {
                audio.player.ready = 0;
                //change audio url to streamhost url -st
                var baseCCUrl = "_media/audio/";
                var audioName = src.substring(src.lastIndexOf("/") + 1);
                var ccUrl = baseCCUrl + audioName;

                $(obj).attr('src', src);
                audio.player.source = src;

                if (!autoplay) {
                    audio.player.pause();
                } else {
                    audio.player.play();
                }

                if (!nocc) {
                    audio.captions.getCaptions(ccUrl);
                } else {
                    // dont look for captions
                }

                if (loop == "loop") {
                    audio.player.loop = "loop";
                    $(obj).attr("loop", "loop");
                } else {
                    $(obj).removeAttr("loop");
                    audio.player.loop = "no-loop";
                }
            }

            obj.addEventListener("loadedmetadata", audio.player.readyToPlay);
            obj.addEventListener("ended", audio.player.done);
            obj.addEventListener("timeupdate", audio.player.playing);

        },

        toggle: function () {
            var showing = $("#media").hasClass("show");
            if (showing) {
                $("#media").removeClass('show').addClass('hide');
                audio.player.view = "hidden";
            } else {
                $("#media").removeClass('hide').addClass('show');
                audio.player.view = "visible";
            }
        },

        playing: function () {
            // set the percentage complete and the timestamp
            audio.player.percent = ((obj.currentTime / obj.duration) * 100).toFixed(2);
            audio.player.time = Math.round((obj.currentTime));

            $(".progress").css("width", audio.player.percent + "%")

            // check volume
            if (obj.volume != audio.player.volume) {
                audio.player.fadeTo(audio.player.volume);
            }

            // update the player state if it is not paused
            if (audio.player.state != "paused") {
                audio.player.playerStatus("playing");
            }
        },

        fadeTo: function (vol) {
            //fade audio to volume

            obj.volume = vol;
            audio.player.volume = vol;

            // removed fade in and fade out
            /*if (obj.volume.toFixed(1) != vol){
                if (obj.volume > audio.player.volume) {
                    obj.volume -= 0.20;         
                } else if(obj.volume < audio.player.volume) {
                    obj.volume += 0.20;  
                } 
            } else {
                
            }*/
        },

        fade: function (vol, delay) {
            /*if (delay || audio.player.state != "playing"){
                obj.volume = vol;
                audio.player.volume = vol;
            } else {
                audio.player.volume = vol;
            }*/

            audio.player.fadeTo(vol);
        },

        play: function () {
            // play the audio file
            obj.play();

            // update the player state
            audio.player.playerStatus("playing");
        },

        pause: function () {
            // pause the audio file
            obj.pause();

            // update the player state
            audio.player.playerStatus("paused");
        },

        done: function () {
            if (audio.player.loop == "loop") {
                obj.currentTime = 0.00;
                audio.player.play();
            }
            // update the player state
            audio.player.playerStatus("done");

            // remove audio event listeners
            obj.removeEventListener("ended", audio.player.done);
            obj.removeEventListener("timeupdate", audio.player.playing);
        },

        replay: function () {
            // play the audio file
            obj.play();

            // update the player state
            audio.player.playerStatus("playing");

            // add back audio event listeners
            obj.addEventListener("ended", audio.player.done);
            obj.addEventListener("timeupdate", audio.player.playing);
        },

        readyToPlay: function () {
            audio.player.ready = 1;
            obj.removeEventListener("loadedmetadata", audio.player.readyToPlay);
        },

        playerStatus: function (state) {
            switch (state) {
                case "paused":
                    // audio is paused - set icon to play
                    TweenMax.to("#play-icon", 0.50, { attr: { d: audio.icons.pausePath }, ease: "Expo.easeOut" });

                    // update audio state
                    audio.player.state = "paused";
                    break;
                case "playing":
                    // transform player to playing state by removing class
                    $("#scrubber").removeClass("replay");

                    // audio is playing - set icon to pause
                    TweenMax.to("#play-icon", 0.50, { attr: { d: audio.icons.playPath }, ease: "Expo.easeOut" });

                    // update the closed captioning and message center
                    audio.captions.update();
                    audio.messages.update();

                    // update audio state
                    audio.player.state = "playing";
                    break;
                case "done":
                    // transform player to replay state by adding class
                    $("#scrubber").addClass("replay");

                    // audio ended - set icon to pause
                    TweenMax.to("#play-icon", 0.50, { attr: { d: audio.icons.replayPath }, delay: 0.50, ease: "Expo.easeOut" });

                    // update audio state
                    audio.player.state = "done";
                    break;
            }
        },
    },

    captions: {
        captioning: [],
        state: "closed",

        getCaptions: function (url) {
            audio.captions.captioning = [];

            $("#cc-text > p").html(" ");

            url = url.slice(0, -4) + ".js";

            $.getJSON(url, function (data) {
                $.each(data, function (idx, val) {
                    audio.captions.captioning.push(val);
                });
            }).done(function (data) {

            }).fail(function (json, textStatus, error) {
                //console.log("getJSON failed, status: " + textStatus + ", error: " + error);
            });
        },

        open: function () {
            // update the captions state
            audio.captions.closedCaptionStatus("opened");
        },

        close: function () {
            // update the captions state
            audio.captions.closedCaptionStatus("closed");
        },

        update: function () {
            // check to see if audio is done and captions were open
            if (audio.player.percent > 99.90 && audio.captions.state == "opened") {
                $(".cc-set").hide();
            } else {
                $(".cc-set").show();
            }

            // update the closed captioning
            for (var i = 0; i < audio.captions.captioning.length; i++) {
                if (audio.player.time > audio.captions.captioning[i].time) {
                    $("#cc-text > p").html("<span>" + audio.captions.captioning[i].text + "</span>");
                } else
                    break;
            }
        },

        closedCaptionStatus: function (view) {

            switch (view) {
                case "opened":
                    // captions are opened - add class to show captions
                    $("#cc-text > p").removeClass('cc-remove').addClass('cc-set');

                    // captions are closed - set them to open
                    audio.captions.state = "opened";

                    break;

                case "closed":
                    // captions are opened - add class to show captions
                    $("#cc-text > p").removeClass('cc-set').addClass('cc-remove');

                    // captions are open - set them to closed
                    audio.captions.state = "closed";

                    break;
            }
        }
    },

    messages: {
        status: null,
        list: [],

        create: function (str, time) {
            // populate message area
            $("#messages .info").html(str);

            // push timestamped massages to an array
            if (time) {
                audio.messages.show();
            } else {
                audio.messages.list.push([str, time]);
                //console.log(audio.messages.list);
            }
        },

        reset: function () {
            audio.messages.hide();
            $("#messages .info").html(" ");
        },

        show: function () {
            // show messages
            $("#messages").removeClass("close").addClass("open");
            audio.messages.status = "open";
        },

        hide: function () {
            // hide messages
            $("#messages").removeClass("open").addClass("close");
            audio.messages.status = "closed";
        },

        update: function () {
            // auto show the messages on audio complete if status equals null
            /*if(audio.messages.list.length > 0){
                audio.messages.show();
            } */

            audio.messages.reset();
        }
    }
}