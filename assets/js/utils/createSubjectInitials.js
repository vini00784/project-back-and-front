const createSubjectInitials = (name) => {
    let subjectName = name;
    let subjectInitials = [];

    let splitedName = subjectName.split(' ');
    splitedName.forEach(index => {
        // console.log(splitedName);
        subjectInitials.push(index[0].toUpperCase());
        // console.log(index[0].toUpperCase());
        // splitedName = index[0].toUpperCase();
    });

    return subjectInitials.join('');
}

export default createSubjectInitials;