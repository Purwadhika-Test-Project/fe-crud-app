import Layout from "@/components/Layout";
import Input from "@/components/Input";
import Button from "@/components/Button";

const Login = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-xs">
          <h2 className="text-center text-2xl font-bold mb-8">Sign In</h2>
          <form>
            <Input
              label="Username"
              id="username"
              type="text"
              placeholder="Username"
            />
            <Input
              label="Password"
              id="password"
              type="password"
              placeholder="******************"
            />
            <div className="flex items-center justify-between">
              <Button type="button">Sign In</Button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
