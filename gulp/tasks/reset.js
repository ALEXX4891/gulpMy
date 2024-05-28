// import del from "del"; // модуль для удаления файлов и папок //npm i del -D
// export const reset = () => {
//   return del(app.path.clean);
// }

import { deleteAsync } from "del"; // модуль для удаления файлов и папок //npm i del -D
export const reset = () => {
    return deleteAsync(app.path.clean);
};