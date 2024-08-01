const { St, GLib, Gio, GObject } = imports.gi;
const Main = imports.ui.main;
const PanelMenu = imports.ui.panelMenu;
const PopupMenu = imports.ui.popupMenu;
const ExtensionUtils = imports.misc.extensionUtils;
const GETTEXT_DOMAIN = 'my-shiny-indicator';

const Indicator = GObject.registerClass(
class Indicator extends PanelMenu.Button {
    _init() {
        super._init(0.0, _('My Shiny Indicator'));

        this.add_child(new St.Icon({
            icon_name: 'face-smile-symbolic',
            style_class: 'system-status-icon',
        }));

        let connectAirpodsItem = new PopupMenu.PopupMenuItem(_('Connect to AirPods Pro 2'));
        connectAirpodsItem.connect('activate', () => {
            this._connectToAirpodsPro2();
        });
        this.menu.addMenuItem(connectAirpodsItem);
    }

    _connectToAirpodsPro2() {
        let macAddress = "18:3F:70:70:78:CA"; 
        let cmd = `bluetoothctl connect "${macAddress}"`;
    
        let proc = new Gio.Subprocess({
            argv: ['sh', '-c', cmd],
            flags: Gio.SubprocessFlags.STDOUT_PIPE | Gio.SubprocessFlags.STDERR_PIPE,
        });
    
        proc.init(null);
    
        proc.communicate_utf8_async(null, null, (proc, res) => {
            let [, stdout, stderr] = proc.communicate_utf8_finish(res);
    
            if (proc.get_successful()) {
                Main.notify(_('Connected to AirPods Pro 2'));
            } else {
                Main.notify(_('Failed to connect to AirPods Pro 2: ') + stderr.trim());
            }
        });
    }
});

class Extension {
    constructor(uuid) {
        this._uuid = uuid;
        ExtensionUtils.initTranslations(GETTEXT_DOMAIN);
    }

    enable() {
        this._indicator = new Indicator();
        Main.panel.addToStatusArea(this._uuid, this._indicator);
        log(`Extension ${this._uuid} enabled`);
    }

    disable() {
        if (this._indicator) {
            this._indicator.destroy();
            this._indicator = null;
            log(`Extension ${this._uuid} disabled`);
        }
    }
}

function init(meta) {
    return new Extension(meta.uuid);
}

function log(message) {
    global.log(`[Airpods Quick Connect] ${message}`);
}

function logError(message) {
    global.logError(`[Airpods Quick Connect] ${message}`);
}
