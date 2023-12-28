const Driver = require('../../main/core/web/base/Driver')

d = new Driver();
d.open('chrome');
d.sleep(5);
d.close();