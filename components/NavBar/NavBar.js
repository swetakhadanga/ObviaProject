import { Container } from "/obvia/components/Container.js";
import { ObjectUtils } from "/obvia/lib/ObjectUtils.js";
import { DependencyContainer } from "/obvia/lib/DependencyContainer.js";

var NavBar = function(_props) {
    let _self = this;

    this.beforeAttach = function(e) {
        if (e.target.id === this.domID) {
            this.$container = this.$el;
        }
    };

    let _defaultParams = {
        type: "",
        components: [],
        classes: ["navbar"]
    };

    ObjectUtils.fromDefault(_defaultParams, _props);
    let r = Container.call(this, _props);

    return r;
};

DependencyContainer.getInstance().register("NavBar", NavBar, DependencyContainer.simpleResolve);
NavBar.prototype.ctor = 'NavBar';

export { NavBar };
