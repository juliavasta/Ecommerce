import H1 from "components/heading/H1";
import FormInput from "components/input/FormInput";
import LoginButton from "components/button/LoginButton";
import loginWrapperCSS from "components/login/LoginWrapper";
import formLoginCSS from "components/login/FormLogin";
import formLoginWrapperCSS from "components/login/FormLoginWrapper";

function ResetPage() {
  return (
    <div className={loginWrapperCSS}>
      <H1 title="Change password" />
      <div className={formLoginWrapperCSS}>
        <form className={formLoginCSS}>
          <FormInput label="Email" />
          <LoginButton type="submit" value="Send email" margin="0 auto" />
        </form>
      </div>
    </div>
  );
}

export default ResetPage;
