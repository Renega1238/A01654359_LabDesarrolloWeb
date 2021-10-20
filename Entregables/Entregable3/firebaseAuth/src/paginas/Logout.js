import { Button } from "@mui/material";

export default function Logout(props) {
  console.log(props.signOut);
  return (
    <Button
      type="button"
      fullWidth
      variant="contained"
      sx={{ mt: 3, mb: 2 }}
      onClick={props.signOut}
    >
      Logout
    </Button>
  );
}
