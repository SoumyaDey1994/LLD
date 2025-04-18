class Handler {
    setNext(nextHandler) {
        this.nextHandler = nextHandler;
        return nextHandler;
    }

    handle(req) {
        if(this.nextHandler) {
            return this.nextHandler.handle(req)
        } else {
            return null;
        }
    }
}

class UserNameHandler extends Handler {
    handle(req) {
        if(req.userName === 'soumyadey') {
            console.log("Valid username, passing to next handler");
            return super.handle(req);
        } else {
            console.log("Invalid username");
            return null
        }
    }
}

class PasswordHandler extends Handler {
    handle(req) {
        if(req.pass === 'pass1234') {
            console.log("Valid username & password. Passing to next handler");
            return super.handle(req);
        } else {
            console.log("Invalid username or password");
            return null;
        }
    }
}

class AccessHandler extends Handler {
    handle(req) {
        if(req.role === 'admin') {
            console.log("Welcome to the page");
            return "Access Granted";
        } else {
            console.log("Access denied, insufficient priviledges");
            return "Access denied, insufficient priviledges";
        }
    }
}

const request = {
    userName: 'soumyadey',
    pass: 'pass1234',
    role: 'admin'
}

const userNameHandler = new UserNameHandler();
const passwordHandler = new PasswordHandler();
const accessHandler = new AccessHandler();

userNameHandler.setNext(passwordHandler).setNext(accessHandler);

userNameHandler.handle(request);
