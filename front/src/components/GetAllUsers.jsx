import React from "react";
import axios from "axios";

const GetAllUsers = () => {

  const [data, setData] = null;
  const GetAllUsers = useSelector((state) => state.getSingleUser);

  const dispatch = useDispatch();

  useEffeffect(() => {
    dispatch(getUsers());
  }, []);

  return (
    <div>
      <div className="Algo">
        <div>
          {GetAllUsers.lenght > 0
            ? GetAllUsers.slice(1).map((n) => {
                return (
                  <div key={n.id}>
                    <h1>{n.username}</h1>
                  </div>
                );
              })
            : null}
        </div>
      </div>
    </div>
  );
};

export default GetAllUsers