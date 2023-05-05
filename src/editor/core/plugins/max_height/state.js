/*
 * @link https://www.php-an602.coders.exchange/
 * @copyright Copyright (c) 2018 H u m H u B GmbH & Co. KG, PHP-AN602, The 86it Developers Network
 * @license https://www.php-an602.coders.exchange/licences
 *
 */

export class MaxHeightState {
    constructor(state, options) {
        this.state = state;
        this.context = options.context;
        this.oldStageHeight = 0;
        this.scrollActive = false;
        this.niceScrollInit = false;
        this.initialized = false;
    }

    update() {
        let stageHeight = this.context.editor.getStage()[0].offsetHeight;

        if(stageHeight === this.oldStageHeight) {
            return;
        }

        this.oldStageHeight = stageHeight;

        if(!this.scrollActive && this.context.editor.getStage()[0].scrollHeight > stageHeight) {
            if(!this.niceScrollInit && !an602.require('ui.view').isSmall() && this.context.editor.getStage().niceScroll) {
                this.context.editor.getStage().niceScroll({
                    cursorwidth: "7",
                    cursorborder: "",
                    cursorcolor: "#606572",
                    cursoropacitymax: "0.3",
                    nativeparentscrolling: false,
                    autohidemode: false,
                    railpadding: {top: 2, right: 3, left: 0, bottom: 2}
                });
            }

            this.niceScrollInit = true;
            this.scrollActive = true;
            this.context.editor.trigger('scrollActive');
        } else if(!this.initialized || this.scrollActive) {
            this.scrollActive = false;
            this.context.editor.trigger('scrollInactive');
        }

        this.initialized = true;
    }
}