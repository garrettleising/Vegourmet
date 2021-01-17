# -*- coding: utf-8 -*-
"""
Created on Sun Jan 17 02:13:53 2021

@author: Leo
"""

import requests
import json
import re

start = 1;
count = start; #set to newest count
countb = 1;
matches = [];
while True:
    print("Begin loop, count = " + str(count));
    url = "https://www.foodrepo.org/api/v3/products?excludes=id%2Cstatus%2Cquantity%2Cunit%2Cportion_quantity%2Cportion_unit%2Chundred_unit%2Calcohol_by_volume%2Cimages%2Cnutrients%2Ccreated_at%2Cupdated_at&page%5Bsize%5D=200&page%5Bnumber%5D="+str(count);
    response = requests.get(url, headers={'Authorization': 'Token {}'.format("a59b2571500290e31d6b0c0629aca8fd")});
    count += 1;
    a = json.loads(response.text);
    if not a["data"]:
        print("Data empty");
        break;
    if count > start+300: #max 300
        print("Count broken");
        break;
    id_dict = json.loads(response.text);
    
    super_list = {"bread": '100'}; #placeholder to prevent error 500s
    name_str = ["bread,"];
    name_count = 0;
    for item in id_dict["data"]:
        if 'en' in item["name_translations"]:
            barcode = item["barcode"];
            name = re.sub(r'\W+', '', item["name_translations"]["en"].replace(" ","_"));
            super_list[name]=barcode;
            if len(name_str[name_count]) + len(name) > 2000:
                name_count += 1;
                name_str.append("bread,");
            name_str[name_count] = name_str[name_count] + str(name) + ",";
    
    print(super_list);
    
    
    print("Begin bon-api...");
    
    for names in name_str:
        countb+=1;
        url = 'https://www.bon-api.com/api/v1/ingredient/alternatives/'+names[:-1];
        print(countb);
        response = json.loads(requests.get(url, headers={'Authorization': 'Token {}'.format("322fc7c0f84cc96314025db96c8771c6f82fa68f")}).text);
        print(response["response"]["matched_ingredients"]);
        if len(response["response"]["matched_ingredients"]) > 1:
            for x in response["response"]["matched_ingredients"]:
                passed = x.split("----->")[0][:-2];
                serial = super_list[passed];
                if passed != "bread":
                    matches.append((str(passed)+" #"+str(serial)));
    
print(matches)    
print("Happy ending!");