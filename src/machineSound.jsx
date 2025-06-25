import "./machineSound.scss"

export function MachineSound({
        songName,
        textButton,
        onSelect,
        volume,
        isPowerOn
}) {

    function handeClick() {
        if(!isPowerOn) return;

        const audio = new Audio(`/songs/${songName}.wav`);
            audio.play();
            audio.volume = volume;
            onSelect();
    }

    return(
        <div className="div-machine-sound">
                <button
                    className="button-machine-sound"
                    onClick={handeClick}
                >
                    {textButton}
                </button>
        </div>
    )
}