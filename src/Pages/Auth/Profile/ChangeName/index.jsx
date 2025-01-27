import { Container, Input, Button } from "@/Components";
import { Checkbox } from "@/Components/Input";
import formStyles from "@/Components/Form/form";

const ChangeName = () => {
  return (
    <Container>
      <form className={formStyles.form({})}>
        <Input htmlFor="new_name" detail="New Name :" focus="blue" />
        <Input htmlFor="new_name" detail="Password :" focus="blue" />
        <Checkbox htmlFor="show-password" />
        <Button label="Save New Name" bgColor="blue" />
      </form>
    </Container>
  );
};

export default ChangeName;
