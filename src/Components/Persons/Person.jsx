const Person = ({ selectCourse }) => {
    return (
        <div>
            <select name="course" className="form-select" multiple onChange={(e) => selectCourse(e)}>
                <option value="">Select Course</option>
                <option value="javaScript">JavaScript</option>
                <option value="reactJs">ReactJs</option>
                <option value="typeScript">TypeScript</option>
                <option value="bootstrap">Bootstrap</option>
            </select>
        </div>
    );
};

export default Person;




