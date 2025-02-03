import { Container, Input, Button } from "@/Components";
import { Checkbox } from "@/Components/Input";
import formStyles from "@/Components/Form/form";

const ChangeName = () => {
  return (
    <Container>
      <form className={formStyles.form({})}>
        <h3 className="text-center text-xl">Change Display Name</h3>
        <Input htmlFor="new_name" detail="New Name :" focus="blue" />
        <Input htmlFor="new_name" detail="Password :" focus="blue" />
        <Checkbox htmlFor="show-password" />
        <Button label="Save New Name" bgColor="blue" />
      </form>
    </Container>
  );
};

export default ChangeName;
