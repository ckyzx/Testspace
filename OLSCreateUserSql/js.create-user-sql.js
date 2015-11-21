var nameList;
var sql;

nameList = [
    ["技术部", "系统管理员", "系统管理员"],
    ["局长室", "郑旭彪", "局长"],
    ["副局长室", "何坤文", "副局长"],
    ["副局长室", "刘文胜", "副局长"],
    ["副局长室", "黄立权", ""],
    ["纪检组长室", "", "纪检组长"],
    ["总经济师", "", "总经济师"],
    ["办公室", "李惠平", "主任"],
    ["办公室", "彭远达", "副主任"],
    ["办公室", "张清平", ""],
    ["办公室", "李婷", ""],
    ["办公室", "刘会文", "业务组长"],
    ["办公室", "张丹丹", ""],
    ["办公室", "肖志崇", ""],
    ["办公室", "廖秋芳", ""],
    ["办公室", "钟岚", ""],
    ["办公室", "刘珊", ""],
    ["办公室", "何兴章", ""],
    ["办公室", "陈耀辉", "司机"],
    ["办公室", "肖森怀", "司机"],
    ["办公室", "何益文", "司机"],
    ["办公室", "陈文峰", "司机"],
    ["办公室", "廖春福", "司机"],
    ["税政股", "罗建华", "股长"],
    ["税政股", "郭俊耿", ""],
    ["税政股", "徐中辉", ""],
    ["税政股", "廖春利", "临工"],
    ["征管股", "张伟", "股长"],
    ["征管股", "罗标辉", "副股长"],
    ["征管股", "曾强", ""],
    ["征管股", "钟玉", ""],
    ["征管股", "刘春梅", ""],
    ["征管股", "彭利锋", ""],
    ["征管股", "吴红中", "业务组长"],
    ["征管股", "张颖", ""],
    ["征管股", "朱雨辰", "临工"],
    ["征管股", "胡燕芬", "副分局长"],
    ["征管股", "陈远东", "业务组长"],
    ["征管股", "曾利方", ""],
    ["征管股", "张添朋", ""],
    ["人教股", "刁向萍", "股长"],
    ["人教股", "张展林", "副主任科员"],
    ["人教股", "赖建华", "副主任科员"],
    ["人教股", "刘思明", "副主任科员"],
    ["人教股", "陈伟新", ""],
    ["人教股", "孙剑波", ""],
    ["人教股", "陈佳伟", ""],
    ["监察室", "钟玩章", "主任"],
    ["监察室", "李荣怀", "业务组长"],
    ["纳税服务股", "蔡伟政", "股长"],
    ["纳税服务股", "陈伟苑", ""],
    ["纳税服务股", "林丹", "协税员"],
    ["稽查局", "刘波", "局长"],
    ["稽查局", "吴焕昌", "副局长"],
    ["稽查局", "钟云彬", "办公室副主任"],
    ["稽查局", "刘坤", ""],
    ["稽查局", "潘建强", "稽查股股长"],
    ["稽查局", "黄永新", "稽查股副股长"],
    ["稽查局", "罗俊辉", ""],
    ["稽查局", "陈冲", "审理股副股长"],
    ["稽查局", "龚浩", ""],
    ["稽查局", "孙佑新", "执行股股长"],
    ["稽查局", "钟明", ""],
    ["新陂分局（大税源管理分局） ", "陈启东", "分局长"],
    ["新陂分局（大税源管理分局） ", "刘红", "专职监察员"],
    ["新陂分局（大税源管理分局） ", "彭伟林", "副分局长"],
    ["新陂分局（大税源管理分局） ", "伍伟清", ""],
    ["新陂分局（大税源管理分局） ", "黄志高", ""],
    ["新陂分局（大税源管理分局） ", "黄侃炎", ""],
    ["新陂分局（大税源管理分局） ", "刘光平", ""],
    ["新陂分局（大税源管理分局） ", "温启华", ""],
    ["新陂分局（大税源管理分局） ", "林集", ""],
    ["新陂分局（大税源管理分局） ", "刁雄", ""],
    ["新陂分局（大税源管理分局） ", "毛建军", ""],
    ["新陂分局（大税源管理分局） ", "刘仿新", ""],
    ["新陂分局（大税源管理分局） ", "罗源", ""],
    ["新陂分局（大税源管理分局） ", "王永东", ""],
    ["新陂分局（大税源管理分局） ", "余理键", ""],
    ["新陂分局（大税源管理分局） ", "戴文锋", ""],
    ["新陂分局（大税源管理分局） ", "钟荣榜", ""],
    ["宁中分局（一般税源管理分局）", "王新", "分局长"],
    ["宁中分局（一般税源管理分局）", "罗洪波", "专职监察员"],
    ["宁中分局（一般税源管理分局）", "李永红", "副分局长"],
    ["宁中分局（一般税源管理分局）", "陈庆辉", "副分局长"],
    ["宁中分局（一般税源管理分局）", "罗志红", "业务组长"],
    ["宁中分局（一般税源管理分局）", "罗小明", "业务组长"],
    ["宁中分局（一般税源管理分局）", "吴思科", ""],
    ["宁中分局（一般税源管理分局）", "黄浩", ""],
    ["宁中分局（一般税源管理分局）", "童茂汕", ""],
    ["宁中分局（一般税源管理分局）", "陈建中", ""],
    ["宁中分局（一般税源管理分局）", "张新伟", ""],
    ["宁中分局（一般税源管理分局）", "张运华", ""],
    ["宁中分局（一般税源管理分局）", "陈定金", ""],
    ["宁中分局（一般税源管理分局）", "陈新宏", ""],
    ["宁中分局（一般税源管理分局）", "李凡", ""],
    ["宁中分局（一般税源管理分局）", "黄斯列", ""],
    ["宁中分局（一般税源管理分局）", "刘森朋", ""],
    ["宁中分局（一般税源管理分局）", "王福群", ""],
    ["宁中分局（一般税源管理分局）", "刘山权", ""],
    ["宁中分局（一般税源管理分局）", "王宁华", ""],
    ["宁中分局（一般税源管理分局）", "林顺兴", ""],
    ["宁中分局（一般税源管理分局）", "高汉明", ""],
    ["宁中分局（一般税源管理分局）", "罗万能", ""],
    ["宁中分局（一般税源管理分局）", "陈益辉", ""],
    ["宁中分局（一般税源管理分局）", "曾金泉", ""],
    ["宁中分局（一般税源管理分局）", "张明才", ""],
    ["宁中分局（一般税源管理分局）", "陈卫民", ""],
    ["宁中分局（一般税源管理分局）", "张建东", ""],
    ["宁中分局（一般税源管理分局）", "刘秋慧", ""],
    ["宁中分局（一般税源管理分局）", "黄育清", ""],
    ["宁中分局（一般税源管理分局）", "李文光", ""],
    ["宁中分局（一般税源管理分局）", "幸伟越", ""],
    ["宁中分局（一般税源管理分局）", "李汉来", ""],
    ["宁中分局（一般税源管理分局）", "曾洪辉", ""],
    ["宁中分局（一般税源管理分局）", "刁伟金", ""],
    ["宁中分局（一般税源管理分局）", "林远松", ""],
    ["宁中分局（一般税源管理分局）", "曾国强", ""],
    ["宁中分局（一般税源管理分局）", "曾祥万", ""],
    ["宁中分局（一般税源管理分局）", "陈冠雄", ""],
    ["宁中分局（一般税源管理分局）", "朱荣桂", ""],
    ["宁中分局（一般税源管理分局）", "刘明育", ""],
    ["宁中分局（一般税源管理分局）", "黄岸平", ""],
    ["宁中分局（一般税源管理分局）", "王建清", ""],
    ["宁中分局（一般税源管理分局）", "黄玩华", ""],
    ["宁中分局（一般税源管理分局）", "罗庆桓", ""],
    ["城区分局", "刁苑辉", "分局长"],
    ["城区分局", "孙丽霞", "副分局长"],
    ["城区分局", "曾科", "副分局长"],
    ["城区分局", "谢伟东", "业务组长"],
    ["城区分局", "张艳芳", ""],
    ["城区分局", "陈利娟", ""],
    ["城区分局", "钟燕飞", ""],
    ["城区分局", "陈菊新", ""],
    ["城区分局", "李汉华", ""],
    ["城区分局", "吴国辉", ""],
    ["城区分局", "肖学东", ""],
    ["城区分局", "罗卫东", ""],
    ["城区分局", "梁平", ""],
    ["城区分局", "罗国新", ""],
    ["城区分局", "刘俐平", ""],
    ["城区分局", "廖娟", ""],
    ["城区分局", "陈思", ""],
    ["城区分局", "刘春兰", ""],
    ["城区分局", "钟海平", ""],
    ["城区分局", "邓佳维", ""],
    ["城区分局", "邱美婷", ""],
    ["城区分局", "曾婷", "协税员"],
    ["城区分局", "范雅静", "协税员"],
    ["城区分局", "黄幸华", "协税员"],
    ["城区分局", "丁颖", "协税员"],
    ["城区分局", "范婷", "协税员"],
    ["城区分局", "袁丹艳", "协税员"],
    ["城区分局", "毛双利", "协税员"],
    ["城区分局", "彭燕", "协税员"],
    ["城区分局", "郑俏玲", "协税员"],
    ["城区分局", "陈萍", "协税员"],
    ["罗岗分局", "张思明", "分局长"],
    ["罗岗分局", "邱力", "业务组长"],
    ["罗岗分局", "罗启杰", ""],
    ["罗岗分局", "刘庆福", ""],
    ["罗岗分局", "陈国平", ""],
    ["罗岗分局", "欧阳升", ""],
    ["罗岗分局", "陈峰", ""],
    ["黄陂分局 ", "蓝俊波", "分局长"],
    ["黄陂分局 ", "王悦", "副分局长"],
    ["黄陂分局 ", "张裕坚", ""],
    ["黄陂分局 ", "陈为民", ""],
    ["黄陂分局 ", "侯学文", ""],
    ["黄陂分局 ", "李丽珠", ""],
    ["黄陂分局 ", "罗维静", "协税员"],
    ["龙田分局", "刘绍斌", "分局长"],
    ["龙田分局", "陈东", "副分局长"],
    ["龙田分局", "许国锋", "副分局长"],
    ["龙田分局", "王梅飞", "业务组长"],
    ["龙田分局", "钟焕元", ""],
    ["龙田分局", "刘亮生", ""],
    ["龙田分局", "张冰强", ""],
    ["龙田分局", "黄均华", ""],
    ["龙田分局", "刘涛", ""],
    ["龙田分局", "陈辰", ""],
    ["龙田分局", "陈文媛", ""],
    ["龙田分局", "刘佳", "协税员"],
    ["龙田分局", "刁芳妮", "协税员"],
    ["坭陂分局", "罗新峰", "分局长"],
    ["坭陂分局", "罗尚东", "副分局长"],
    ["坭陂分局", "刘国良", "副分局长"],
    ["坭陂分局", "黄宏清", "业务组长"],
    ["坭陂分局", "吴宝钦", ""],
    ["坭陂分局", "钟福星", ""],
    ["坭陂分局", "廖亚文", ""],
    ["坭陂分局", "何旺宏", ""],
    ["坭陂分局", "童小生", ""],
    ["坭陂分局", "张冰雄", ""],
    ["坭陂分局", "罗崇标", ""],
    ["坭陂分局", "曾坤华", ""],
    ["坭陂分局", "曾慧瑶", ""],
    ["坭陂分局", "毛思权", ""],
    ["坭陂分局", "翁丽兰", ""]
];


sql = createUserSql(nameList);
console.log(sql);

function createUserSql(nameList) {


    var departments, duties, users;
    var sql;

    departments = [];
    duties = [];
    users = [];

    sql = '';

    dId = 1;
    duId = 1;
    uId = 1;

    for (var i = 0; i < nameList.length; i++) {

        d = nameList[i][0];
        u = nameList[i][1];
        du = nameList[i][2];

        dup = whetherDuplicate(departments, d);
        if (!dup) {

            sql += addDepartmentAndRole(d, dId);
            sql += addDepartmentRoleRelation(dId);
            departments.push({
                id: dId,
                name: d
            });
            dId1 = dId;
            dId += 1;
        } else {
            dId1 = dup;
        }

        // 判断职务是否为空
        duId1 = 'NULL';
        if ('' != du) {
            dup = whetherDuplicate(duties, du);
            if (!dup) {

                sql += addDuty(du, duId);
                duties.push({
                    id: duId,
                    name: du
                });
                duId1 = duId;
                duId += 1;
            } else {
                duId1 = dup;
            }
        }

        if ('' != u) {
            if (!whetherDuplicate(users, u)) {

                sql += addUser(u, uId, duId1, dId1, dId1);
                sql += addUserDepartmentRelation(uId, dId1);
                users.push({
                    id: uId,
                    name: u
                });
            }
            uId += 1;
        }

    }

    return sql;
}

function whetherDuplicate(ary, ele) {

    for (var i = 0; i < ary.length; i++) {

        if (ary[i].name == ele) {
            return ary[i].id;
        }
    }

    return false;
}

function addDepartmentAndRole(name, id) {

    var sql;

    sql = "INSERT INTO Departments (D_Id, D_Name, D_Roles, D_Level, D_Remark, D_AddTime, D_Status) " +
        "VALUES (" + id + ", '" + name + "', '[" + id + "]', '000" + id + "', NULL, GETDATE(), 1);\r\n";
    sql += "INSERT INTO Roles (R_Id, R_Name, R_Permissions, R_PermissionCategories, R_Remark, R_AddTime, R_Status) " +
        "VALUES (" + id + ", '" + name + "', '[]', '[]', NULL, GETDATE(), 1);\r\n";

    return sql;
}

function addDepartmentRoleRelation(id) {

    var sql;

    sql = "INSERT INTO Department_Role (D_Id, R_Id) VALUES (" + id + ", " + id + ");\r\n";

    return sql;
}

function addDuty(name, id) {

    var sql;

    sql = "INSERT INTO Duties (Du_Id, Du_Name, Du_Remark, Du_AddTime, Du_Status) " +
        "VALUES (" + id + ", '" + name + "', NULL, GETDATE(), 1);\r\n";

    return sql;
}

function addUser(name, id, duId, dId, rId) {

    var sql;

    enName = ConvertPinyin(name);
    sql = "INSERT INTO Users (U_Id, U_Name, U_LoginName, U_Password, Du_Id, U_Departments, U_Roles, U_Remark, U_AddTime, U_Status) " +
        "VALUES (" + id + ", '" + name + "', '" + enName + "', 'BC111B2A0E2ABDB0A74F698C45551DE7'/*xnsw201510*/, " + duId + ", '[" + dId + "]', '[" + rId + "]', NULL, GETDATE(), 1);\r\n";

    return sql;
}

function addUserDepartmentRelation(uId, dId) {

    var sql;

    sql = "INSERT INTO User_Department (U_Id, D_Id) VALUES (" + uId + ", " + dId + ");\r\n";

    return sql;
}