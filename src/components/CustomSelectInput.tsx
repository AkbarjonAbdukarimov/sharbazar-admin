import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Box, CircularProgress, Tooltip, Typography } from "@mui/material";
type optionType = {
  prop: {
    id: string;
    name: string;
  };
  name: string;
  value: string;
  id: string;
};
export default function CustomSelectInput({
  label,
  setSelected,
  data,
}: {
  label: string;
  data: Array<optionType | object>;
  setSelected: Function;
}) {
  if (data) {
    return (
      <Autocomplete
        disablePortal
        //isOptionEqualToValue={ }
        onChange={(_e, value) => setSelected(value)}
        id="combo-box-demo"
        renderOption={(props, option: optionType) => {
          return (
            <Box
              key={option.prop ? option.prop.id : option.id}
              component="li"
              sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
              {...props}
            >
              {option.prop ? (
                <Tooltip
                  key={option.prop.id}
                  title={option.prop.name.toString()}
                >
                  <Typography variant="subtitle1" gutterBottom>
                    {option.name || option.value}
                  </Typography>
                </Tooltip>
              ) : (
                <>{option.name || option.value}</>
              )}
            </Box>
          );
        }}
        getOptionLabel={(option: optionType) =>
          option.name || option.value || ""
        }
        renderInput={(params) => <TextField {...params} label={label} />}
        //@ts-ignore
        options={data}
      />
    );
  }

  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <CircularProgress />
    </Box>
  );
}
