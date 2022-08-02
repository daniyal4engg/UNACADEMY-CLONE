import axios from "axios";

export const TeacherData = async (key, id) => {
  return await axios.get(`https://project-server-all.herokuapp.com/${key}`, {
    params: {
      id: id,
    },
  });
};
