import useSelectedClass from "../../Hooks/useSelectedClass";

const DashBoard = () => {
    const [selected] = useSelectedClass()
    return (

        <div>
            <h2>Dashboard coming :{selected.length}</h2>
        </div>
    );
};

export default DashBoard;