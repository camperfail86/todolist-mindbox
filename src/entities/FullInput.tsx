import { ChangeEvent, memo, useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import {useDispatch} from "react-redux";
import {AddTask} from "../reducer/reducer";

const btnStyle = {
    maxWidth: "40px",
    minWidth: "40px",
    maxHeight: "39px",
    minHeight: "39px",
    marginLeft: "5px",
    backgroundColor: "#9c27b0",
};

const textStyle = {
  backgroundColor: "aliceblue",
  color: 'black',
  borderRadius: '5px'
};

export const FullInput = memo(() => {
    const dispatch = useDispatch()
    const [error, setError] = useState(false);
    const [title, setTitle] = useState("");
    const onClickHandler = () => {
            if (title.trim() !== "") {
                setError(false);
                dispatch(AddTask(title))
                setTitle('')
            } else {
                setError(true)
            }
    };

    return (
        <div className={'header'}>
            <TextField
                id="outlined-basic"
                label={error ? "Введите текст" : "Добавьте задачу"}
                variant="filled"
                value={title}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setTitle(e.currentTarget.value)}
                error={error}
                helperText={error ? "Title is required" : ""}
                size="small"
                style={textStyle}
            />
            <Button style={btnStyle} onClick={onClickHandler} variant="contained">
                +
            </Button>
        </div>
    );
});
